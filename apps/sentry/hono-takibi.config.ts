import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // getsentry/sentry-api-schema
  input: 'https://raw.githubusercontent.com/getsentry/sentry-api-schema/main/openapi-derefed.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://{region}.sentry.io',
  },
})
