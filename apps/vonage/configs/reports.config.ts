import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/reports/2.2.2/openapi.yaml',
  output: './src/reports/routes.ts',
  docs: {
    output: './src/reports/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
