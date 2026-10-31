import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/pinpoint-email/2018-07-26/openapi.yaml',
  output: './src/pinpoint-email/routes.ts',
  docs: {
    output: './src/pinpoint-email/api.md',
    curl: true,
    baseUrl: 'https://pinpoint-email.us-east-1.amazonaws.com',
  },
})
