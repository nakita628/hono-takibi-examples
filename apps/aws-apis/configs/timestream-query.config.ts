import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/timestream-query/2018-11-01/openapi.yaml',
  output: './src/timestream-query/routes.ts',
  docs: {
    output: './src/timestream-query/api.md',
    curl: true,
    baseUrl: 'https://timestream-query.us-east-1.amazonaws.com',
  },
})
