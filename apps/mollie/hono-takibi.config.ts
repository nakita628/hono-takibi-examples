import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Mollie API, official OpenAPI spec:
  // https://github.com/mollie/openapi/blob/eae37cfdc102ed8ebc48e6a18a54e463ac7382ee/specs.yaml
  input: 'https://raw.githubusercontent.com/mollie/openapi/main/specs.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.mollie.com',
  },
})
