import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/conjur.local/5.3.0/openapi.yaml',
  output: './src/conjur/routes.ts',
  docs: {
    output: './src/conjur/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
