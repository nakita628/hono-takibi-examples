import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/cloudformation/2010-05-15/openapi.yaml',
  output: './src/cloudformation/routes.ts',
  docs: {
    output: './src/cloudformation/api.md',
    curl: true,
    baseUrl: 'https://cloudformation.us-east-1.amazonaws.com',
  },
})
