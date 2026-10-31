import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/cloudscheduler/v1beta1/openapi.yaml',
  output: './src/cloudscheduler/routes.ts',
  docs: {
    output: './src/cloudscheduler/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
