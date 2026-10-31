import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/docdb/2014-10-31/openapi.yaml',
  output: './src/docdb/routes.ts',
  docs: {
    output: './src/docdb/api.md',
    curl: true,
    baseUrl: 'https://docdb.us-east-1.amazonaws.com',
  },
})
