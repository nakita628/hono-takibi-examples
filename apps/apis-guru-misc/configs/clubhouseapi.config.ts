import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clubhouseapi.com/1/openapi.yaml',
  output: './src/clubhouseapi/routes.ts',
  docs: {
    output: './src/clubhouseapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
