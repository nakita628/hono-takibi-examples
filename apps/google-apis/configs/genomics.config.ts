import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/genomics/v2alpha1/openapi.yaml',
  output: './src/genomics/routes.ts',
  docs: {
    output: './src/genomics/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
