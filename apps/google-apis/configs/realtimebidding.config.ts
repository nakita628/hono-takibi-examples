import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/realtimebidding/v1alpha/openapi.yaml',
  output: './src/realtimebidding/routes.ts',
  docs: {
    output: './src/realtimebidding/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
