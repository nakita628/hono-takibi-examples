import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/contentgroove.com/1.0.0/openapi.yaml',
  output: './src/contentgroove/routes.ts',
  docs: {
    output: './src/contentgroove/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
