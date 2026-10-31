import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dataflow/v1b3/openapi.yaml',
  output: './src/dataflow/routes.ts',
  docs: {
    output: './src/dataflow/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
