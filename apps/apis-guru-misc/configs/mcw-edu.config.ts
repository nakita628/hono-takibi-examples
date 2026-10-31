import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mcw.edu/1.1/openapi.yaml',
  output: './src/mcw-edu/routes.ts',
  docs: {
    output: './src/mcw-edu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
