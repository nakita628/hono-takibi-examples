import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datacatalog/v1beta1/openapi.yaml',
  output: './src/datacatalog/routes.ts',
  docs: {
    output: './src/datacatalog/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
