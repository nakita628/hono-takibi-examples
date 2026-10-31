import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/translate/v3beta1/openapi.yaml',
  output: './src/translate/routes.ts',
  docs: {
    output: './src/translate/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
