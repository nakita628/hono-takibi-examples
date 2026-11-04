import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Chargebee API v2 / Product Catalog v2, official OpenAPI spec:
  // https://github.com/chargebee/openapi/blob/main/spec/chargebee_api_v2_pc_v2_spec.yaml
  input:
    'https://raw.githubusercontent.com/chargebee/openapi/main/spec/chargebee_api_v2_pc_v2_spec.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://{site}.chargebee.com/api/v2',
  },
})
