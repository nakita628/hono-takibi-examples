import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/codebuild/2016-10-06/openapi.yaml',
  output: './src/codebuild/routes.ts',
  docs: {
    output: './src/codebuild/api.md',
    curl: true,
    baseUrl: 'https://codebuild.us-east-1.amazonaws.com',
  },
})
