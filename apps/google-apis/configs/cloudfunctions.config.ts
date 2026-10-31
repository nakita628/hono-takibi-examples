import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/cloudfunctions/v2/openapi.yaml',
  output: './src/cloudfunctions/routes.ts',
  docs: {
    output: './src/cloudfunctions/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
