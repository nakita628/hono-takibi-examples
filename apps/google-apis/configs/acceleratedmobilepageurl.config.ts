import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/acceleratedmobilepageurl/v1/openapi.yaml',
  output: './src/acceleratedmobilepageurl/routes.ts',
  docs: {
    output: './src/acceleratedmobilepageurl/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
