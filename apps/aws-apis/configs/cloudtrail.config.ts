import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloudtrail/2013-11-01/openapi.yaml',
  output: './src/cloudtrail/routes.ts',
  docs: {
    output: './src/cloudtrail/api.md',
    curl: true,
    baseUrl: 'https://cloudtrail.us-east-1.amazonaws.com',
  },
})
