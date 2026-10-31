import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sdb/2009-04-15/openapi.yaml',
  output: './src/sdb/routes.ts',
  docs: {
    output: './src/sdb/api.md',
    curl: true,
    baseUrl: 'https://sdb.us-east-1.amazonaws.com',
  },
})
