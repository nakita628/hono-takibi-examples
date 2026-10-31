import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/MasterData-API-/1.0/openapi.yaml',
  output: './src/masterdata-api/routes.ts',
  docs: {
    output: './src/masterdata-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
