import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudsupport/v2beta/openapi.yaml',
  output: './src/cloudsupport/routes.ts',
  docs: {
    output: './src/cloudsupport/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
