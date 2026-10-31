import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zeit.co/v2019-01-07/openapi.yaml',
  output: './src/zeit-co/routes.ts',
  docs: {
    output: './src/zeit-co/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
