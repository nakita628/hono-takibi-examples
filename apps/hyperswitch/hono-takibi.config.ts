import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/juspay/hyperswitch/main/api-reference/v1/openapi_spec_v1.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://sandbox.hyperswitch.io',
  },
})
