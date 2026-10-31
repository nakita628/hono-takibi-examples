import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/eks/2017-11-01/openapi.yaml',
  output: './src/eks/routes.ts',
  docs: {
    output: './src/eks/api.md',
    curl: true,
    baseUrl: 'https://eks.us-east-1.amazonaws.com',
  },
})
