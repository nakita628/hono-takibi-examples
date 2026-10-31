import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/advisorynotifications/v1/openapi.yaml',
  output: './src/advisorynotifications/routes.ts',
  docs: {
    output: './src/advisorynotifications/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
