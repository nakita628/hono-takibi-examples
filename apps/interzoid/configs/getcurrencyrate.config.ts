import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcurrencyrate/1.0.0/openapi.yaml',
  output: './src/getcurrencyrate/routes.ts',
  docs: {
    output: './src/getcurrencyrate/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
