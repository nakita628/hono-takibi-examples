import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/sts/v1beta/openapi.yaml',
  output: './src/sts/routes.ts',
  docs: {
    output: './src/sts/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
