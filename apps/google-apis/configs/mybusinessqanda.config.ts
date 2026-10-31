import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessqanda/v1/openapi.yaml',
  output: './src/mybusinessqanda/routes.ts',
  docs: {
    output: './src/mybusinessqanda/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
