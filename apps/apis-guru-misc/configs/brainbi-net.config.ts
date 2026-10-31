import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/brainbi.net/1.0.0/openapi.yaml',
  output: './src/brainbi-net/routes.ts',
  docs: {
    output: './src/brainbi-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
