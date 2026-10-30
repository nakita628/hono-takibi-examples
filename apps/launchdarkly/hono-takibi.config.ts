import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://app.launchdarkly.com/api/v2/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://app.launchdarkly.com',
  },
})
