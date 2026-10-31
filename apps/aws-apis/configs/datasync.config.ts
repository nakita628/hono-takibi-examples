import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/datasync/2018-11-09/openapi.yaml',
  output: './src/datasync/routes.ts',
  docs: {
    output: './src/datasync/api.md',
    curl: true,
    baseUrl: 'https://datasync.us-east-1.amazonaws.com',
  },
})
