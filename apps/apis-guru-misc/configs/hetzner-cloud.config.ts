import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/hetzner.cloud/1.0.0/openapi.yaml',
  output: './src/hetzner-cloud/routes.ts',
  docs: {
    output: './src/hetzner-cloud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
