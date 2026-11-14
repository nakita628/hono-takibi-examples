import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Pinterest REST API v5, official OpenAPI spec:
  // https://github.com/pinterest/api-description/blob/2503147fd9f86f26230891b8534b678c31cc849a/v5/openapi.yaml
  input: 'https://raw.githubusercontent.com/pinterest/api-description/main/v5/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.pinterest.com/v5',
  },
})
