import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lookoutmetrics/2017-07-25/openapi.yaml',
  output: './src/lookoutmetrics/routes.ts',
  docs: {
    output: './src/lookoutmetrics/api.md',
    curl: true,
    baseUrl: 'https://lookoutmetrics.us-east-1.amazonaws.com',
  },
})
