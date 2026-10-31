import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/appsactivity/v1/openapi.yaml',
  output: './src/appsactivity/routes.ts',
  docs: {
    output: './src/appsactivity/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
