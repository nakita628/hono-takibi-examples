import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/qldb/2019-01-02/openapi.yaml',
  output: './src/qldb/routes.ts',
  docs: {
    output: './src/qldb/api.md',
    curl: true,
    baseUrl: 'https://qldb.us-east-1.amazonaws.com',
  },
})
