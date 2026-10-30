import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://docs.hetzner.cloud/cloud.spec.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.hetzner.cloud/v1',
  },
})
