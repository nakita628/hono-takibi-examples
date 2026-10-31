import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/securityhub/2018-10-26/openapi.yaml',
  output: './src/securityhub/routes.ts',
  docs: {
    output: './src/securityhub/api.md',
    curl: true,
    baseUrl: 'https://securityhub.us-east-1.amazonaws.com',
  },
})
