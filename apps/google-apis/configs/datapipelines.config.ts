import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datapipelines/v1/openapi.yaml',
  output: './src/datapipelines/routes.ts',
  docs: {
    output: './src/datapipelines/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
