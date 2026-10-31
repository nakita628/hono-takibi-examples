import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/patrowl.local/1.0.0/openapi.yaml',
  output: './src/patrowl/routes.ts',
  docs: {
    output: './src/patrowl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
