import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/verifiedaccess/v2/openapi.yaml',
  output: './src/verifiedaccess/routes.ts',
  docs: {
    output: './src/verifiedaccess/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
