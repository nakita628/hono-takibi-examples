import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/up.com.au/v1/openapi.yaml',
  output: './src/up-au/routes.ts',
  docs: {
    output: './src/up-au/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
