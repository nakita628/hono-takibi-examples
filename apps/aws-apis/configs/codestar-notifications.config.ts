import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codestar-notifications/2019-10-15/openapi.yaml',
  output: './src/codestar-notifications/routes.ts',
  docs: {
    output: './src/codestar-notifications/api.md',
    curl: true,
    baseUrl: 'https://codestar-notifications.us-east-1.amazonaws.com',
  },
})
