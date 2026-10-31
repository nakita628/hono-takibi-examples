import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/getpostman.com/1.20.0/openapi.yaml',
  output: './src/getpostman/routes.ts',
  docs: {
    output: './src/getpostman/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
