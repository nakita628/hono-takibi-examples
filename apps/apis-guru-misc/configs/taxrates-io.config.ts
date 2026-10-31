import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/taxrates.io/1.0.0/openapi.yaml',
  output: './src/taxrates-io/routes.ts',
  docs: {
    output: './src/taxrates-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
