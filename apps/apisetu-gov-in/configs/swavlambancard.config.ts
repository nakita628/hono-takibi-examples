import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/swavlambancard/3.0.0/openapi.yaml',
  output: './src/swavlambancard/routes.ts',
  docs: {
    output: './src/swavlambancard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
