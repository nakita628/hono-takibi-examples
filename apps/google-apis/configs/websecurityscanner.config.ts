import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/websecurityscanner/v1beta/openapi.yaml',
  output: './src/websecurityscanner/routes.ts',
  docs: {
    output: './src/websecurityscanner/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
