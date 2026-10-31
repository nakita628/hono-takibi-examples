import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cognito-sync/2014-06-30/openapi.yaml',
  output: './src/cognito-sync/routes.ts',
  docs: {
    output: './src/cognito-sync/api.md',
    curl: true,
    baseUrl: 'https://cognito-sync.us-east-1.amazonaws.com',
  },
})
