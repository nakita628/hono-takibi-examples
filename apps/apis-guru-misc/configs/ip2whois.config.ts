import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ip2whois.com/1.0/openapi.yaml',
  output: './src/ip2whois/routes.ts',
  docs: {
    output: './src/ip2whois/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
