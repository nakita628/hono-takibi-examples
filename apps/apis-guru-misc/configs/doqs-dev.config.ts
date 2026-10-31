import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/doqs.dev/1.0/openapi.yaml',
  output: './src/doqs-dev/routes.ts',
  docs: {
    output: './src/doqs-dev/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
