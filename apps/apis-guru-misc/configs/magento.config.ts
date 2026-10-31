import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/magento.com/2.2.10/openapi.yaml',
  output: './src/magento/routes.ts',
  docs: {
    output: './src/magento/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
