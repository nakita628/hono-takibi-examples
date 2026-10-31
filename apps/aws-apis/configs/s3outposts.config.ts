import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/s3outposts/2017-07-25/openapi.yaml',
  output: './src/s3outposts/routes.ts',
  docs: {
    output: './src/s3outposts/api.md',
    curl: true,
    baseUrl: 'https://s3outposts.us-east-1.amazonaws.com',
  },
})
