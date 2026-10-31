import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/simplivpn.net/1.0/openapi.yaml',
  output: './src/simplivpn-net/routes.ts',
  docs: {
    output: './src/simplivpn-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
