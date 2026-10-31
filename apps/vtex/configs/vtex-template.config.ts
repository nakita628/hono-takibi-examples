import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/VTEX_TEMPLATE/1.0.0/openapi.yaml',
  output: './src/vtex-template/routes.ts',
  docs: {
    output: './src/vtex-template/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
