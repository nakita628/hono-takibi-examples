import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/secretmanager/v1beta1/openapi.yaml',
  output: './src/secretmanager/routes.ts',
  docs: {
    output: './src/secretmanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
