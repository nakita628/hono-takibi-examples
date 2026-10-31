import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/clouddirectory/2017-01-11/openapi.yaml',
  output: './src/clouddirectory/routes.ts',
  docs: {
    output: './src/clouddirectory/api.md',
    curl: true,
    baseUrl: 'https://clouddirectory.us-east-1.amazonaws.com',
  },
})
