import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datastore/v1beta1/openapi.yaml',
  output: './src/datastore/routes.ts',
  docs: {
    output: './src/datastore/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
