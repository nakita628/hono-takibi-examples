import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/devops-guru/2020-12-01/openapi.yaml',
  output: './src/devops-guru/routes.ts',
  docs: {
    output: './src/devops-guru/api.md',
    curl: true,
    baseUrl: 'https://devops-guru.us-east-1.amazonaws.com',
  },
})
