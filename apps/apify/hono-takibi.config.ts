import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Apify API, official OpenAPI spec:
  // https://github.com/apify/apify-docs/blob/f43cd6ca1a8ac561edf21ba125f894fd914f03b9/apify-api/openapi/openapi.yaml
  input:
    'https://raw.githubusercontent.com/apify/apify-docs/master/apify-api/openapi/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.apify.com',
  },
})
