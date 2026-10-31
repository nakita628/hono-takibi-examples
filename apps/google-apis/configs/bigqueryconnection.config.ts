import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/bigqueryconnection/v1beta1/openapi.yaml',
  output: './src/bigqueryconnection/routes.ts',
  docs: {
    output: './src/bigqueryconnection/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
