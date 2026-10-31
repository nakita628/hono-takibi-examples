import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/letmc.com/customer/v2-customer/openapi.yaml',
  output: './src/letmc-customer/routes.ts',
  docs: {
    output: './src/letmc-customer/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
