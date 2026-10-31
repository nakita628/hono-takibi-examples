import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/servicebroker/v1beta1/openapi.yaml',
  output: './src/servicebroker/routes.ts',
  docs: {
    output: './src/servicebroker/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
