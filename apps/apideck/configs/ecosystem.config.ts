import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/ecosystem/0.0.6/openapi.yaml',
  output: './src/ecosystem/routes.ts',
  docs: {
    output: './src/ecosystem/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
