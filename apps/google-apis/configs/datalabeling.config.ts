import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datalabeling/v1beta1/openapi.yaml',
  output: './src/datalabeling/routes.ts',
  docs: {
    output: './src/datalabeling/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
