import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/revolut-engineering/revolut-openapi/master/yaml/merchant-2024-09-01.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://merchant.revolut.com',
  },
})
