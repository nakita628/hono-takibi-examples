import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/flat.io/2.13.0/openapi.yaml',
  output: './src/flat-io/routes.ts',
  docs: {
    output: './src/flat-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
