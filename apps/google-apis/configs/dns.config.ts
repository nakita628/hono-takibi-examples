import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/dns/v2/openapi.yaml',
  output: './src/dns/routes.ts',
  docs: {
    output: './src/dns/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
