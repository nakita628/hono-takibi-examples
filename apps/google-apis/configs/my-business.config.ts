import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/my-business/v4/openapi.yaml',
  output: './src/my-business/routes.ts',
  docs: {
    output: './src/my-business/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
