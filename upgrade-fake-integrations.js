import SecretManager from "@luckyorange/secret-manager";
import ElasticSearch from "@luckyorange/elasticsearch";

import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const secretManager = SecretManager.getInstance({
	initialCache: {},
	initializeGCP: true,
	gcpProject: "lucky-orange",
});

const elasticSearch = ElasticSearch.createInstance(secretManager);
const es = await elasticSearch.getClient('forever');

// TODO
// [] loop through the files to fill in the name to the id
// [] make the es request to add the new integration es
// the id is inside the folders on the same level as this file, then inside their respective integration.config.file
// await es.index({
// 	index: 'integrations',
// 	id: '',
// 	body: {
// 		title: 'Test',
// 		content: 'This is a test',
// 	},
// });

async function updateIntegrations() {
  const baseDir = __dirname;

  const entries = fs.readdirSync(baseDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const configJsPath = path.join(baseDir, entry.name, 'integration.config.js');

      if (fs.existsSync(configJsPath)) {
        try {
          const integrationConfig = require(configJsPath);

          if (!integrationConfig.id) {
             console.warn(`Skipping folder "${entry.name}" – missing "id" in integration.config.js`);
             continue;
          }

          const body = {
            title: integrationConfig.name || entry.name,
            content: integrationConfig.description || '',
          };

          // await es.index({
          //   index: 'integrations',
          //   id: integrationConfig.id,
          //   body,
          // });

          console.log(`Indexed integration from folder "${entry.name}" with id "${integrationConfig.id}" with body ${JSON.stringify(body)}`);
        } catch (error) {
          console.error(`Error processing integration in folder "${entry.name}": `, error);
        }
      }
    }
  }
};

await updateIntegrations();
