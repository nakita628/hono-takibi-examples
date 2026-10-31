import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tl-api.azurewebsites.net/2020-08-10_6-22/openapi.yaml',
  output: './src/tl-api-azurewebsites-net/routes.ts',
  docs: {
    output: './src/tl-api-azurewebsites-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
