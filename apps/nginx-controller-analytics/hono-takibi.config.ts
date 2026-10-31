import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nginx/documentation/main/static/nginx-controller/api/reference/ctlr-analytics-openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://controller.example.com/api/v1',
  },
})
