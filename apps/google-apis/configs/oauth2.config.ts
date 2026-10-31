import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/oauth2/v2/openapi.yaml',
  output: './src/oauth2/routes.ts',
  docs: {
    output: './src/oauth2/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
