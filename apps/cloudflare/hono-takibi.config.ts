import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Cloudflare API: https://github.com/cloudflare/api-schemas
  input: 'https://raw.githubusercontent.com/cloudflare/api-schemas/main/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.cloudflare.com/client/v4',
  },
})
