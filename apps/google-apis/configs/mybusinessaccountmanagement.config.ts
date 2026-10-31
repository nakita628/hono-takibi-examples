import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessaccountmanagement/v1/openapi.yaml',
  output: './src/mybusinessaccountmanagement/routes.ts',
  docs: {
    output: './src/mybusinessaccountmanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
