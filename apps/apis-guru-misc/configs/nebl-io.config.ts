import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nebl.io/1.3.0/openapi.yaml',
  output: './src/nebl-io/routes.ts',
  docs: {
    output: './src/nebl-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
