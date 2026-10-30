import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.jellyfin.org/openapi/jellyfin-openapi-stable.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:8096',
  },
})
