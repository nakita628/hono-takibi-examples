import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/proxy/9.3.0/openapi.yaml',
  output: './src/proxy/routes.ts',
  docs: {
    output: './src/proxy/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
