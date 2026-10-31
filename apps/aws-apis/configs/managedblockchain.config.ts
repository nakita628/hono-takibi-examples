import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/managedblockchain/2018-09-24/openapi.yaml',
  output: './src/managedblockchain/routes.ts',
  docs: {
    output: './src/managedblockchain/api.md',
    curl: true,
    baseUrl: 'https://managedblockchain.us-east-1.amazonaws.com',
  },
})
