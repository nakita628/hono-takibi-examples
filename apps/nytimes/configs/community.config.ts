import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/community/3.0.0/openapi.yaml',
  output: './src/community/routes.ts',
  docs: {
    output: './src/community/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
