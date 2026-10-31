import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/macie/2017-12-19/openapi.yaml',
  output: './src/macie/routes.ts',
  docs: {
    output: './src/macie/api.md',
    curl: true,
    baseUrl: 'https://macie.us-east-1.amazonaws.com',
  },
})
