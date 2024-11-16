import { Pinecone } from "@pinecone-database/pinecone";
import {env} from "./config"
import {delay} from "./utils"


const indexName = env.PINECONE_INDEX_NAME;

const client = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
});
  
  export const createPineconeIndex = async (client: Pinecone, indexName: string) => {
      console.log(`Checking ${indexName}`);
  
      // Get list of existing indexes - updated for new API
      const existingIndexes = await client.listIndexes();
      const indexExists = existingIndexes.indexes?.some(index => index.name === indexName);
  
      if (!indexExists) {
          console.log(`Creating ${indexName}`);
          await client.createIndex({
              name: indexName,
              dimension: 1536,
              metric: 'cosine',
              spec: {
                  serverless: {
                      cloud: 'aws',
                      region: 'us-east-1'
                  }
              }
          });
  
          console.log(`Creating index.... please wait for it to finish initializing`);
          await new Promise((resolve) => setTimeout(resolve, env.INDEX_INIT_TIMEOUT));
      } else {
          console.log(`${indexName} already exists`);
      }
  }


