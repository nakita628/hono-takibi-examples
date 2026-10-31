import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/elasticache/2015-02-02/openapi.yaml',
  output: './src/elasticache/routes.ts',
  docs: {
    output: './src/elasticache/api.md',
    curl: true,
    baseUrl: 'https://elasticache.us-east-1.amazonaws.com',
  },
})
