import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/apigeeregistry/v1/openapi.yaml',
  output: './src/apigeeregistry/routes.ts',
  docs: {
    output: './src/apigeeregistry/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
