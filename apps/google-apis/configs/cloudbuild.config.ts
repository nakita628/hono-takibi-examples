import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/cloudbuild/v1alpha2/openapi.yaml',
  output: './src/cloudbuild/routes.ts',
  docs: {
    output: './src/cloudbuild/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
