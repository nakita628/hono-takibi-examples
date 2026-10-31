import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/detective/2018-10-26/openapi.yaml',
  output: './src/detective/routes.ts',
  docs: {
    output: './src/detective/api.md',
    curl: true,
    baseUrl: 'https://detective.us-east-1.amazonaws.com',
  },
})
