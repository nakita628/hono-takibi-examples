import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sms77.io/1.0.0/openapi.yaml',
  output: './src/sms77-io/routes.ts',
  docs: {
    output: './src/sms77-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
