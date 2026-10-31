import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/resourcegroupstaggingapi/2017-01-26/openapi.yaml',
  output: './src/resourcegroupstaggingapi/routes.ts',
  docs: {
    output: './src/resourcegroupstaggingapi/api.md',
    curl: true,
    baseUrl: 'https://resourcegroupstaggingapi.us-east-1.amazonaws.com',
  },
})
