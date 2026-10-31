import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/countries/1.0.0/openapi.yaml',
  output: './src/countries/routes.ts',
  docs: {
    output: './src/countries/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
