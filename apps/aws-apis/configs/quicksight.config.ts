import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/quicksight/2018-04-01/openapi.yaml',
  output: './src/quicksight/routes.ts',
  docs: {
    output: './src/quicksight/api.md',
    curl: true,
    baseUrl: 'https://quicksight.us-east-1.amazonaws.com',
  },
})
