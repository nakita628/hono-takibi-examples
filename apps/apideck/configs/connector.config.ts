import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/connector/9.3.0/openapi.yaml',
  output: './src/connector/routes.ts',
  docs: {
    output: './src/connector/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
