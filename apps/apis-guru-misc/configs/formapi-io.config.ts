import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/formapi.io/v1/openapi.yaml',
  output: './src/formapi-io/routes.ts',
  docs: {
    output: './src/formapi-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
