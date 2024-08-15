import { liteClient as algoliasearch } from "algoliasearch/lite";

const appID = "ALGOLIA_APPLICATION_ID";
const apiKey = "ALGOLIA_API_KEY";
const indexName = "test-index";
const query = "test";

const client = algoliasearch(appID, apiKey);

interface Itinerary {
  name: string;
  description: string;
  title_fr: string;
}

client
  .search<Itinerary>({
    requests: [
      {
        indexName,
        query,
      },
    ],
  })
  .then((response) => {
    console.log(response.results[0].hits);
  });
