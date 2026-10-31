import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebasestorage/v1beta/openapi.yaml',
  output: './src/firebasestorage/routes.ts',
  docs: {
    output: './src/firebasestorage/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
