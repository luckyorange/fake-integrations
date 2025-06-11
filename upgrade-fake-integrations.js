import SecretManager from "@luckyorange/secret-manager";
import ElasticSearch from "@luckyorange/elasticsearch";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const secretManager = SecretManager.getInstance({
	initialCache: {},
	initializeGCP: true,
	gcpProject: "lucky-orange",
});

const elasticSearch = ElasticSearch.createInstance(secretManager);
const es = await elasticSearch.getClient('forever');

async function updateIntegrations() {
  const baseDir = path.join(__dirname, "integrations");
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const configJsPath = path.join(baseDir, entry.name, "integration.config.js");

      if (fs.existsSync(configJsPath)) {
        try {
          // Dynamically import using the ES module syntax.
          const integrationModule = await import(pathToFileURL(configJsPath).href);
          // Assuming the config uses a default export.
          const integrationConfig = integrationModule.default;

          if (!integrationConfig.id) {
            console.warn(`Skipping folder "${entry.name}" – missing "id" in integration.config.js`);
            continue;
          }

          const body = {
            id: integrationConfig.id,
            labels: {
              name: integrationConfig.name || entry.name,
              description: integrationConfig.description || ''
            },
            images: {
              icon: integrationConfig.icon || ''
            },
            authentication: {
              type: integrationConfig.authentication?.type || "appStore",
              appStoreUrl: integrationConfig.authentication?.appStoreUrl || ''
            },
            customTabs: integrationConfig.customTabs || [],
            settings: integrationConfig.settings || { type: "object", keys: { v1: { type: "object", keys: {} } } },
            types: integrationConfig.types || [],
            updatedAt: new Date().toISOString()
          };


          await es.index({
            index: 'integrations',
            id: integrationConfig.id,
            body,
            refresh: 'true',
          });

          console.log(`Indexed integration from folder "${entry.name}" with id "${integrationConfig.id}"`);
        } catch (error) {
          console.error(`Error processing integration in folder "${entry.name}":`, error);
        }
      }
    }
  }
}

await updateIntegrations();
