import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessnotifications/v1/openapi.yaml',
  output: './src/mybusinessnotifications/routes.ts',
  docs: {
    output: './src/mybusinessnotifications/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
