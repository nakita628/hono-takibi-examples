import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datalineage/v1/openapi.yaml',
  output: './src/datalineage/routes.ts',
  docs: {
    output: './src/datalineage/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
