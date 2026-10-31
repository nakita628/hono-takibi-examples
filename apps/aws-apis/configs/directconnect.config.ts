import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/directconnect/2012-10-25/openapi.yaml',
  output: './src/directconnect/routes.ts',
  docs: {
    output: './src/directconnect/api.md',
    curl: true,
    baseUrl: 'https://directconnect.us-east-1.amazonaws.com',
  },
})
