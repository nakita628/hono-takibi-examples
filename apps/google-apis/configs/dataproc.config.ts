import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dataproc/v1/openapi.yaml',
  output: './src/dataproc/routes.ts',
  docs: {
    output: './src/dataproc/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
