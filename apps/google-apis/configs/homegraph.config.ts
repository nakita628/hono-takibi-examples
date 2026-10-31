import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/homegraph/v1/openapi.yaml',
  output: './src/homegraph/routes.ts',
  docs: {
    output: './src/homegraph/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
