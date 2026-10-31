import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloudsearch/2013-01-01/openapi.yaml',
  output: './src/cloudsearch/routes.ts',
  docs: {
    output: './src/cloudsearch/api.md',
    curl: true,
    baseUrl: 'https://cloudsearch.us-east-1.amazonaws.com',
  },
})
