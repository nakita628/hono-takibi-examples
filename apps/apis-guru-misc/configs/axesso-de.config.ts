import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/axesso.de/1.0.0/openapi.yaml',
  output: './src/axesso-de/routes.ts',
  docs: {
    output: './src/axesso-de/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
