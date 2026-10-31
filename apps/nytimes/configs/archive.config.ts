import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/archive/1.0.0/openapi.yaml',
  output: './src/archive/routes.ts',
  docs: {
    output: './src/archive/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
