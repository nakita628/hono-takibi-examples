import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Ably REST Platform API, official OpenAPI spec:
  // https://github.com/ably/open-specs/blob/98111bb20075c1beba3b66412d0c7791cbd0f168/definitions/platform-v1.yaml
  input:
    'https://raw.githubusercontent.com/ably/open-specs/main/definitions/platform-v1.yaml',
  output: './src/platform/routes.ts',
  docs: {
    output: './src/platform/api.md',
    curl: true,
    baseUrl: 'https://rest.ably.io',
  },
})
