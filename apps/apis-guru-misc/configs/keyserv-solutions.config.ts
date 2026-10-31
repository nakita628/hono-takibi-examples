import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/keyserv.solutions/1.4.5/openapi.yaml',
  output: './src/keyserv-solutions/routes.ts',
  docs: {
    output: './src/keyserv-solutions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
