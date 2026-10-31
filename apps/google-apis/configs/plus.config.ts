import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/plus/v1/openapi.yaml',
  output: './src/plus/routes.ts',
  docs: {
    output: './src/plus/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
