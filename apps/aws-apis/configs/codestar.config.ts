import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codestar/2017-04-19/openapi.yaml',
  output: './src/codestar/routes.ts',
  docs: {
    output: './src/codestar/api.md',
    curl: true,
    baseUrl: 'https://codestar.us-east-1.amazonaws.com',
  },
})
