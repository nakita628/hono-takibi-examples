import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fraudlabspro.com/sms-verification/1.0/openapi.yaml',
  output: './src/fraudlabspro-sms-verification/routes.ts',
  docs: {
    output: './src/fraudlabspro-sms-verification/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
