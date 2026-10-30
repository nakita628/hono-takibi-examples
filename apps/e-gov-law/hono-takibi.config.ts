import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://laws.e-gov.go.jp/api/2/swagger-ui/lawapi-v2.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://laws.e-gov.go.jp/api/2',
  },
})
