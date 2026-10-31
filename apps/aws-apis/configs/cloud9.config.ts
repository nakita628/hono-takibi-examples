import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloud9/2017-09-23/openapi.yaml',
  output: './src/cloud9/routes.ts',
  docs: {
    output: './src/cloud9/api.md',
    curl: true,
    baseUrl: 'https://cloud9.us-east-1.amazonaws.com',
  },
})
