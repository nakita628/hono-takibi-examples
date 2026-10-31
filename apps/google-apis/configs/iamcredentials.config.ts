import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/iamcredentials/v1/openapi.yaml',
  output: './src/iamcredentials/routes.ts',
  docs: {
    output: './src/iamcredentials/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
