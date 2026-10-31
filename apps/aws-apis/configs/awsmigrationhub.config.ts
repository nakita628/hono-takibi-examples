import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/AWSMigrationHub/2017-05-31/openapi.yaml',
  output: './src/awsmigrationhub/routes.ts',
  docs: {
    output: './src/awsmigrationhub/api.md',
    curl: true,
    baseUrl: 'https://awsmigrationhub.us-east-1.amazonaws.com',
  },
})
