import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/analyticsdata/v1beta/openapi.yaml',
  output: './src/analyticsdata/routes.ts',
  docs: {
    output: './src/analyticsdata/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
