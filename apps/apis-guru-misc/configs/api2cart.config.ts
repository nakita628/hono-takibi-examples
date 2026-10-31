import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/api2cart.com/1.1/openapi.yaml',
  output: './src/api2cart/routes.ts',
  docs: {
    output: './src/api2cart/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
