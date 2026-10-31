import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/cloudresourcemanager/v3/openapi.yaml',
  output: './src/cloudresourcemanager/routes.ts',
  docs: {
    output: './src/cloudresourcemanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
