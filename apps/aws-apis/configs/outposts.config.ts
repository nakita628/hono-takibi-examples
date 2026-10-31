import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/outposts/2019-12-03/openapi.yaml',
  output: './src/outposts/routes.ts',
  docs: {
    output: './src/outposts/api.md',
    curl: true,
    baseUrl: 'https://outposts.us-east-1.amazonaws.com',
  },
})
