import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/alertcenter/v1beta1/openapi.yaml',
  output: './src/alertcenter/routes.ts',
  docs: {
    output: './src/alertcenter/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
