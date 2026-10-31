import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openpolicy.local/0.28.0/openapi.yaml',
  output: './src/openpolicy/routes.ts',
  docs: {
    output: './src/openpolicy/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
