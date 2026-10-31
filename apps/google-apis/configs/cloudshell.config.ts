import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudshell/v1/openapi.yaml',
  output: './src/cloudshell/routes.ts',
  docs: {
    output: './src/cloudshell/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
