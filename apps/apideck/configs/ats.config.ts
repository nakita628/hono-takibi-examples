import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/ats/9.3.0/openapi.yaml',
  output: './src/ats/routes.ts',
  docs: {
    output: './src/ats/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
