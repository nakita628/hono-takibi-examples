import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/hris/9.3.0/openapi.yaml',
  output: './src/hris/routes.ts',
  docs: {
    output: './src/hris/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
