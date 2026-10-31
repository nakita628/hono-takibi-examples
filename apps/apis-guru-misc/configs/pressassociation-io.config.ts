import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pressassociation.io/2.0/openapi.yaml',
  output: './src/pressassociation-io/routes.ts',
  docs: {
    output: './src/pressassociation-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
