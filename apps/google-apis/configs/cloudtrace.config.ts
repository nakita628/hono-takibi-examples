import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudtrace/v2beta1/openapi.yaml',
  output: './src/cloudtrace/routes.ts',
  docs: {
    output: './src/cloudtrace/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
