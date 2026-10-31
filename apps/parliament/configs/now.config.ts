import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/now/v1/openapi.yaml',
  output: './src/now/routes.ts',
  docs: {
    output: './src/now/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
