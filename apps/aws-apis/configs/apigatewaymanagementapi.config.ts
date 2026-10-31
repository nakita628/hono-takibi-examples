import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/apigatewaymanagementapi/2018-11-29/openapi.yaml',
  output: './src/apigatewaymanagementapi/routes.ts',
  docs: {
    output: './src/apigatewaymanagementapi/api.md',
    curl: true,
    baseUrl: 'https://apigatewaymanagementapi.us-east-1.amazonaws.com',
  },
})
