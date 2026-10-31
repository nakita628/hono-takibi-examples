import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/monitoring/2010-08-01/openapi.yaml',
  output: './src/monitoring/routes.ts',
  docs: {
    output: './src/monitoring/api.md',
    curl: true,
    baseUrl: 'https://monitoring.us-east-1.amazonaws.com',
  },
})
