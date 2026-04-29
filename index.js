import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { CosmosClient } from "@azure/cosmos";

const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);
const container = client.database(process.env.DATABASE_NAME).container(process.env.CONTAINER_NAME);

const { resources: items } = await container.items.query(`
    SELECT VALUE c.StoreId
    FROM c
`).fetchAll();

console.log(JSON.stringify(items, null, 2));
console.log("length: " + items.length);
