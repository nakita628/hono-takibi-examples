import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/fms/2018-01-01/openapi.yaml',
  output: './src/fms/routes.ts',
  docs: {
    output: './src/fms/api.md',
    curl: true,
    baseUrl: 'https://fms.us-east-1.amazonaws.com',
  },
})
