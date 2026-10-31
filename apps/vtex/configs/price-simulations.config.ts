import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Price-Simulations/1.0/openapi.yaml',
  output: './src/price-simulations/routes.ts',
  docs: {
    output: './src/price-simulations/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
