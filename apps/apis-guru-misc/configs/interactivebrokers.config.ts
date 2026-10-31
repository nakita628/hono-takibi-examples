import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interactivebrokers.com/1.0.0/openapi.yaml',
  output: './src/interactivebrokers/routes.ts',
  docs: {
    output: './src/interactivebrokers/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
