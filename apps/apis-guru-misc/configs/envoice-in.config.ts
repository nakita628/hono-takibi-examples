import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/envoice.in/v1/openapi.yaml',
  output: './src/envoice-in/routes.ts',
  docs: {
    output: './src/envoice-in/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
