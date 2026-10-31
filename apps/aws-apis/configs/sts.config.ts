import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/sts/2011-06-15/openapi.yaml',
  output: './src/sts/routes.ts',
  docs: {
    output: './src/sts/api.md',
    curl: true,
    baseUrl: 'https://sts.us-east-1.amazonaws.com',
  },
})
