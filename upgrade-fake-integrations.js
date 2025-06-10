import SecretManager from "@luckyorange/secret-manager";
import ElasticSearch from "@luckyorange/elasticsearch";

const secretManager = SecretManager.getInstance({
	initialCache: {},
	initializeGCP: true,
	gcpProject: "lucky-orange",
});

const elasticSearch = ElasticSearch.createInstance(secretManager);

export { secretManager, elasticSearch };
