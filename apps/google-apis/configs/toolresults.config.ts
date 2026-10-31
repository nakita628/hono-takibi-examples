import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/toolresults/v1beta3/openapi.yaml',
  output: './src/toolresults/routes.ts',
  docs: {
    output: './src/toolresults/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
