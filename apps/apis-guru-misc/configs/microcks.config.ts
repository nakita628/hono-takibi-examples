import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microcks.local/1.7.0/openapi.yaml',
  output: './src/microcks/routes.ts',
  docs: {
    output: './src/microcks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
