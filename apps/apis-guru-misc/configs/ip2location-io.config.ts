import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ip2location.io/1.0/openapi.yaml',
  output: './src/ip2location-io/routes.ts',
  docs: {
    output: './src/ip2location-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
