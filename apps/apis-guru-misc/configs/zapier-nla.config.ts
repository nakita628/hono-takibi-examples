import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zapier.com/nla/1.0.0/openapi.yaml',
  output: './src/zapier-nla/routes.ts',
  docs: {
    output: './src/zapier-nla/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
