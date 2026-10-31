import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/adexperiencereport/v1/openapi.yaml',
  output: './src/adexperiencereport/routes.ts',
  docs: {
    output: './src/adexperiencereport/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
