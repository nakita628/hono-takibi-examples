import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/billingo.hu/3.0.7/openapi.yaml',
  output: './src/billingo-hu/routes.ts',
  docs: {
    output: './src/billingo-hu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
