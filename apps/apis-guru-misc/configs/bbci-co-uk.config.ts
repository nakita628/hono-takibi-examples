import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bbci.co.uk/1.0/openapi.yaml',
  output: './src/bbci-co-uk/routes.ts',
  docs: {
    output: './src/bbci-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
