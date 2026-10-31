import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebasedatabase/v1beta/openapi.yaml',
  output: './src/firebasedatabase/routes.ts',
  docs: {
    output: './src/firebasedatabase/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
