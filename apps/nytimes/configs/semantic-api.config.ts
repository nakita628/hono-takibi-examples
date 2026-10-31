import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/semantic_api/2.0.0/openapi.yaml',
  output: './src/semantic-api/routes.ts',
  docs: {
    output: './src/semantic-api/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
