import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ec2/2016-11-15/openapi.yaml',
  output: './src/ec2/routes.ts',
  docs: {
    output: './src/ec2/api.md',
    curl: true,
    baseUrl: 'https://ec2.us-east-1.amazonaws.com',
  },
})
