import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/playintegrity/v1/openapi.yaml',
  output: './src/playintegrity/routes.ts',
  docs: {
    output: './src/playintegrity/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
