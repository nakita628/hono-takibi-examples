import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/ssm/2014-11-06/openapi.yaml',
  output: './src/ssm/routes.ts',
  docs: {
    output: './src/ssm/api.md',
    curl: true,
    baseUrl: 'https://ssm.us-east-1.amazonaws.com',
  },
})
