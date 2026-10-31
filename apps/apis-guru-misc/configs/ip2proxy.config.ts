import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ip2proxy.com/1.0/openapi.yaml',
  output: './src/ip2proxy/routes.ts',
  docs: {
    output: './src/ip2proxy/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
