import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cognito-identity/2014-06-30/openapi.yaml',
  output: './src/cognito-identity/routes.ts',
  docs: {
    output: './src/cognito-identity/api.md',
    curl: true,
    baseUrl: 'https://cognito-identity.us-east-1.amazonaws.com',
  },
})
