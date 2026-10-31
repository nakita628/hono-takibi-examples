import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/rds/2014-10-31/openapi.yaml',
  output: './src/rds/routes.ts',
  docs: {
    output: './src/rds/api.md',
    curl: true,
    baseUrl: 'https://rds.us-east-1.amazonaws.com',
  },
})
