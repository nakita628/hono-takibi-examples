import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Knock API, official OpenAPI spec:
  // https://github.com/knocklabs/docs/blob/fa596be423c8b0f855baab3a71bd91aa2f4d27fd/data/specs/api/openapi.yml
  input: 'https://raw.githubusercontent.com/knocklabs/docs/main/data/specs/api/openapi.yml',
  output: './src/api/routes.ts',
  docs: {
    output: './src/api/api.md',
    curl: true,
    baseUrl: 'https://api.knock.app',
  },
})
