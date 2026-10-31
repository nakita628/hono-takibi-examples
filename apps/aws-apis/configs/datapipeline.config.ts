import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/datapipeline/2012-10-29/openapi.yaml',
  output: './src/datapipeline/routes.ts',
  docs: {
    output: './src/datapipeline/api.md',
    curl: true,
    baseUrl: 'https://datapipeline.us-east-1.amazonaws.com',
  },
})
