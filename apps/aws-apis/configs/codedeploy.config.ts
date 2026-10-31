import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codedeploy/2014-10-06/openapi.yaml',
  output: './src/codedeploy/routes.ts',
  docs: {
    output: './src/codedeploy/api.md',
    curl: true,
    baseUrl: 'https://codedeploy.us-east-1.amazonaws.com',
  },
})
