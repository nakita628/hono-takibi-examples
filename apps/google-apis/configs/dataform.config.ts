import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dataform/v1beta1/openapi.yaml',
  output: './src/dataform/routes.ts',
  docs: {
    output: './src/dataform/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
