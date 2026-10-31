import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/beyondcorp/v1/openapi.yaml',
  output: './src/beyondcorp/routes.ts',
  docs: {
    output: './src/beyondcorp/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
