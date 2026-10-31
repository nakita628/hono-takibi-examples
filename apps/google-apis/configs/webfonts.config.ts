import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/webfonts/v1/openapi.yaml',
  output: './src/webfonts/routes.ts',
  docs: {
    output: './src/webfonts/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
