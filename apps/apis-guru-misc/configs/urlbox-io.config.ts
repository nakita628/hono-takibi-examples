import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/urlbox.io/v1/openapi.yaml',
  output: './src/urlbox-io/routes.ts',
  docs: {
    output: './src/urlbox-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
