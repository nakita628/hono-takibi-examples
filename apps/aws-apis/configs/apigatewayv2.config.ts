import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/apigatewayv2/2018-11-29/openapi.yaml',
  output: './src/apigatewayv2/routes.ts',
  docs: {
    output: './src/apigatewayv2/api.md',
    curl: true,
    baseUrl: 'https://apigatewayv2.us-east-1.amazonaws.com',
  },
})
