import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ec2-instance-connect/2018-04-02/openapi.yaml',
  output: './src/ec2-instance-connect/routes.ts',
  docs: {
    output: './src/ec2-instance-connect/api.md',
    curl: true,
    baseUrl: 'https://ec2-instance-connect.us-east-1.amazonaws.com',
  },
})
