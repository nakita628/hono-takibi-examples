import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/canada-holidays.ca/1.8.0/openapi.yaml',
  output: './src/canada-holidays-ca/routes.ts',
  docs: {
    output: './src/canada-holidays-ca/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
