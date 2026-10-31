import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openaq.local/2.0.0/openapi.yaml',
  output: './src/openaq/routes.ts',
  docs: {
    output: './src/openaq/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
