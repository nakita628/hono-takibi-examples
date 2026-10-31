import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/webrisk/v1/openapi.yaml',
  output: './src/webrisk/routes.ts',
  docs: {
    output: './src/webrisk/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
