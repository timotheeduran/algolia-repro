"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lite_1 = require("algoliasearch/lite");
const appID = "DHS2GIZXXT";
const apiKey = "a32c6fbe813b8ab5979305e8e645a656";
const indexName = "prod_itineraries";
const query = "Pou";
const client = (0, lite_1.liteClient)(appID, apiKey);
client
    .search({
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
