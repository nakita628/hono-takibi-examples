import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/jobs/v3p1beta1/openapi.yaml',
  output: './src/jobs/routes.ts',
  docs: {
    output: './src/jobs/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
