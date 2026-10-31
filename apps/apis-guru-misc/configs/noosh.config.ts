import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/noosh.com/1.0/openapi.yaml',
  output: './src/noosh/routes.ts',
  docs: {
    output: './src/noosh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
