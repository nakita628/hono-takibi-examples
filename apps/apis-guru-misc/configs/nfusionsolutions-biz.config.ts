import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nfusionsolutions.biz/1/openapi.yaml',
  output: './src/nfusionsolutions-biz/routes.ts',
  docs: {
    output: './src/nfusionsolutions-biz/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
