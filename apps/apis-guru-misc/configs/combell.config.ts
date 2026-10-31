import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/combell.com/v2/openapi.yaml',
  output: './src/combell/routes.ts',
  docs: {
    output: './src/combell/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
