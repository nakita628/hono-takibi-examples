import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/VTEX-Do-API/1.0/openapi.yaml',
  output: './src/vtex-do-api/routes.ts',
  docs: {
    output: './src/vtex-do-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
