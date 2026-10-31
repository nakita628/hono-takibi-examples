import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/crediwatch.com/covid19/1.3.0/openapi.yaml',
  output: './src/crediwatch-covid19/routes.ts',
  docs: {
    output: './src/crediwatch-covid19/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
