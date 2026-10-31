import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gerermesaffaires.com/1.0.6/openapi.yaml',
  output: './src/gerermesaffaires/routes.ts',
  docs: {
    output: './src/gerermesaffaires/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
