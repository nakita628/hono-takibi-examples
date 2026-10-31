import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codesearch.debian.net/1.4.0/openapi.yaml',
  output: './src/codesearch-debian-net/routes.ts',
  docs: {
    output: './src/codesearch-debian-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
