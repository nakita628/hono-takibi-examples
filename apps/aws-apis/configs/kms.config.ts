import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/kms/2014-11-01/openapi.yaml',
  output: './src/kms/routes.ts',
  docs: {
    output: './src/kms/api.md',
    curl: true,
    baseUrl: 'https://kms.us-east-1.amazonaws.com',
  },
})
