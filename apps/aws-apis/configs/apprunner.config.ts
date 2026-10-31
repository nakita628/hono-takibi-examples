import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/apprunner/2020-05-15/openapi.yaml',
  output: './src/apprunner/routes.ts',
  docs: {
    output: './src/apprunner/api.md',
    curl: true,
    baseUrl: 'https://apprunner.us-east-1.amazonaws.com',
  },
})
