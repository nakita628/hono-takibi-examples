import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datafusion/v1beta1/openapi.yaml',
  output: './src/datafusion/routes.ts',
  docs: {
    output: './src/datafusion/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
