import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/License-Manager-API/1.0/openapi.yaml',
  output: './src/license-manager-api/routes.ts',
  docs: {
    output: './src/license-manager-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
