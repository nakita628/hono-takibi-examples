import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/dms/2016-01-01/openapi.yaml',
  output: './src/dms/routes.ts',
  docs: {
    output: './src/dms/api.md',
    curl: true,
    baseUrl: 'https://dms.us-east-1.amazonaws.com',
  },
})
