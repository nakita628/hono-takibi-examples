import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tomtom.com/search/1.0.0/openapi.yaml',
  output: './src/tomtom-search/routes.ts',
  docs: {
    output: './src/tomtom-search/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
