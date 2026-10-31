import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinesslodging/v1/openapi.yaml',
  output: './src/mybusinesslodging/routes.ts',
  docs: {
    output: './src/mybusinesslodging/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
