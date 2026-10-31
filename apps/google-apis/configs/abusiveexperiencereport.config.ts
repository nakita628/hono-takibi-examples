import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/abusiveexperiencereport/v1/openapi.yaml',
  output: './src/abusiveexperiencereport/routes.ts',
  docs: {
    output: './src/abusiveexperiencereport/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
