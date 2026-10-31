import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/facecheck.id/v1.02/openapi.yaml',
  output: './src/facecheck-id/routes.ts',
  docs: {
    output: './src/facecheck-id/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
