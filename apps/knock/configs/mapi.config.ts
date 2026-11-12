import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Knock Management API, official OpenAPI spec:
  // https://github.com/knocklabs/docs/blob/fa596be423c8b0f855baab3a71bd91aa2f4d27fd/data/specs/mapi/openapi.yml
  input:
    'https://raw.githubusercontent.com/knocklabs/docs/main/data/specs/mapi/openapi.yml',
  output: './src/mapi/routes.ts',
  docs: {
    output: './src/mapi/api.md',
    curl: true,
    baseUrl: 'https://control.knock.app',
  },
})
