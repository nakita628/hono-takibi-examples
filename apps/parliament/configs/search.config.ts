import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/search/Live/openapi.yaml',
  output: './src/search/routes.ts',
  docs: {
    output: './src/search/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
