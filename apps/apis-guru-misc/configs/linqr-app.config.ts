import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/linqr.app/2.0/openapi.yaml',
  output: './src/linqr-app/routes.ts',
  docs: {
    output: './src/linqr-app/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
