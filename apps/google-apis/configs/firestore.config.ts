import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/firestore/v1beta2/openapi.yaml',
  output: './src/firestore/routes.ts',
  docs: {
    output: './src/firestore/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
