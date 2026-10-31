import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/workmailmessageflow/2019-05-01/openapi.yaml',
  output: './src/workmailmessageflow/routes.ts',
  docs: {
    output: './src/workmailmessageflow/api.md',
    curl: true,
    baseUrl: 'https://workmailmessageflow.us-east-1.amazonaws.com',
  },
})
