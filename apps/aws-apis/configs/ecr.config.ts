import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/ecr/2015-09-21/openapi.yaml',
  output: './src/ecr/routes.ts',
  docs: {
    output: './src/ecr/api.md',
    curl: true,
    baseUrl: 'https://ecr.us-east-1.amazonaws.com',
  },
})
