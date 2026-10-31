import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/timeswire/3.0.0/openapi.yaml',
  output: './src/timeswire/routes.ts',
  docs: {
    output: './src/timeswire/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
