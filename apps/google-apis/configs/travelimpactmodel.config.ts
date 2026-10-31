import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/travelimpactmodel/v1/openapi.yaml',
  output: './src/travelimpactmodel/routes.ts',
  docs: {
    output: './src/travelimpactmodel/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
