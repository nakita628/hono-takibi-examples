import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openchannel.io/market/2.0.24/openapi.yaml',
  output: './src/openchannel-io-market/routes.ts',
  docs: {
    output: './src/openchannel-io-market/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
