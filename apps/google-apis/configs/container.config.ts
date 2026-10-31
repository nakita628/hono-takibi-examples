import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/container/v1beta1/openapi.yaml',
  output: './src/container/routes.ts',
  docs: {
    output: './src/container/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
