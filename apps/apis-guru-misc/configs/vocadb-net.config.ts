import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vocadb.net/1.0/openapi.yaml',
  output: './src/vocadb-net/routes.ts',
  docs: {
    output: './src/vocadb-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
