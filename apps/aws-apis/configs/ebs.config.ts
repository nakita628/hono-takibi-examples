import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ebs/2019-11-02/openapi.yaml',
  output: './src/ebs/routes.ts',
  docs: {
    output: './src/ebs/api.md',
    curl: true,
    baseUrl: 'https://ebs.us-east-1.amazonaws.com',
  },
})
