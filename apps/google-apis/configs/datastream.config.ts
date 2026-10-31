import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datastream/v1/openapi.yaml',
  output: './src/datastream/routes.ts',
  docs: {
    output: './src/datastream/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
