import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/vectortile/v1/openapi.yaml',
  output: './src/vectortile/routes.ts',
  docs: {
    output: './src/vectortile/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
