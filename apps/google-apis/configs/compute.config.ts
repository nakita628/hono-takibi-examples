import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/compute/v1/openapi.yaml',
  output: './src/compute/routes.ts',
  docs: {
    output: './src/compute/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
