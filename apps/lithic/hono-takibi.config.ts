import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Lithic Developer API, official OpenAPI spec:
  // https://github.com/lithic-com/lithic-openapi/blob/8e799c885838b51938491915955488b3a907afb1/lithic-openapi.yml
  input:
    'https://raw.githubusercontent.com/lithic-com/lithic-openapi/main/lithic-openapi.yml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://sandbox.lithic.com',
  },
})
