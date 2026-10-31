import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.tailscale.com/api/v2?outputOpenapiSchema=true',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.tailscale.com/api/v2',
  },
})
