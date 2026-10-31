import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/timestream-write/2018-11-01/openapi.yaml',
  output: './src/timestream-write/routes.ts',
  docs: {
    output: './src/timestream-write/api.md',
    curl: true,
    baseUrl: 'https://timestream-write.us-east-1.amazonaws.com',
  },
})
