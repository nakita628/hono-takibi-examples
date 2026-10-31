import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apispot.io/whois/1.0/openapi.yaml',
  output: './src/apispot-io-whois/routes.ts',
  docs: {
    output: './src/apispot-io-whois/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
