import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/times_tags/1.0.0/openapi.yaml',
  output: './src/times-tags/routes.ts',
  docs: {
    output: './src/times-tags/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
