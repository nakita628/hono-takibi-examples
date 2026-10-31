import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/bigtableadmin/v2/openapi.yaml',
  output: './src/bigtableadmin/routes.ts',
  docs: {
    output: './src/bigtableadmin/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
