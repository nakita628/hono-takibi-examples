import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/jellyfin.local/v1/openapi.yaml',
  output: './src/jellyfin/routes.ts',
  docs: {
    output: './src/jellyfin/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
