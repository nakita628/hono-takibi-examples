import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/c19qrserver.local/1.1/openapi.yaml',
  output: './src/c19qrserver/routes.ts',
  docs: {
    output: './src/c19qrserver/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
