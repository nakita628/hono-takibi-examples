import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elasticmapreduce/2009-03-31/openapi.yaml',
  output: './src/elasticmapreduce/routes.ts',
  docs: {
    output: './src/elasticmapreduce/api.md',
    curl: true,
    baseUrl: 'https://elasticmapreduce.us-east-1.amazonaws.com',
  },
})
