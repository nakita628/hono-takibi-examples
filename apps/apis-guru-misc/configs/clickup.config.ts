import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clickup.com/1.0.0/openapi.yaml',
  output: './src/clickup/routes.ts',
  docs: {
    output: './src/clickup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
