import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/iqualify.com/v1/openapi.yaml',
  output: './src/iqualify/routes.ts',
  docs: {
    output: './src/iqualify/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
