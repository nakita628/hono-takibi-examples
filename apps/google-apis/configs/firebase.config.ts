import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/firebase/v1beta1/openapi.yaml',
  output: './src/firebase/routes.ts',
  docs: {
    output: './src/firebase/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
