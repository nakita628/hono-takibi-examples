import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/cognito-idp/2016-04-18/openapi.yaml',
  output: './src/cognito-idp/routes.ts',
  docs: {
    output: './src/cognito-idp/api.md',
    curl: true,
    baseUrl: 'https://cognito-idp.us-east-1.amazonaws.com',
  },
})
