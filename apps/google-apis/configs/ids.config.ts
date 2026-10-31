import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/ids/v1/openapi.yaml',
  output: './src/ids/routes.ts',
  docs: {
    output: './src/ids/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
