import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wso2apistore.com/transform/1.0.0/openapi.yaml',
  output: './src/wso2apistore-transform/routes.ts',
  docs: {
    output: './src/wso2apistore-transform/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
