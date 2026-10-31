import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/secretsmanager/2017-10-17/openapi.yaml',
  output: './src/secretsmanager/routes.ts',
  docs: {
    output: './src/secretsmanager/api.md',
    curl: true,
    baseUrl: 'https://secretsmanager.us-east-1.amazonaws.com',
  },
})
