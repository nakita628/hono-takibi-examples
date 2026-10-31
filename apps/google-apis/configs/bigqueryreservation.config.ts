import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/bigqueryreservation/v1beta1/openapi.yaml',
  output: './src/bigqueryreservation/routes.ts',
  docs: {
    output: './src/bigqueryreservation/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
