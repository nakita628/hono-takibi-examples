import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/sms/9.3.0/openapi.yaml',
  output: './src/sms/routes.ts',
  docs: {
    output: './src/sms/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
