import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sms/2016-10-24/openapi.yaml',
  output: './src/sms/routes.ts',
  docs: {
    output: './src/sms/api.md',
    curl: true,
    baseUrl: 'https://sms.us-east-1.amazonaws.com',
  },
})
