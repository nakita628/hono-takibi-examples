import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dfareporting/v3.4/openapi.yaml',
  output: './src/dfareporting/routes.ts',
  docs: {
    output: './src/dfareporting/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
