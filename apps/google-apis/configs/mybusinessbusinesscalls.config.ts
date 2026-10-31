import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessbusinesscalls/v1/openapi.yaml',
  output: './src/mybusinessbusinesscalls/routes.ts',
  docs: {
    output: './src/mybusinessbusinesscalls/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
