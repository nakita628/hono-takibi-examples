import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/linode.com/4.145.0/openapi.yaml',
  output: './src/linode/routes.ts',
  docs: {
    output: './src/linode/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
