import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/codepipeline/2015-07-09/openapi.yaml',
  output: './src/codepipeline/routes.ts',
  docs: {
    output: './src/codepipeline/api.md',
    curl: true,
    baseUrl: 'https://codepipeline.us-east-1.amazonaws.com',
  },
})
