import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/remove.bg/1.0.0/openapi.yaml',
  output: './src/remove-bg/routes.ts',
  docs: {
    output: './src/remove-bg/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
