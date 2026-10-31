import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/digitalocean.com/2.0/openapi.yaml',
  output: './src/digitalocean/routes.ts',
  docs: {
    output: './src/digitalocean/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
