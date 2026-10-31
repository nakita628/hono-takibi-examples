import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/fis/2020-12-01/openapi.yaml',
  output: './src/fis/routes.ts',
  docs: {
    output: './src/fis/api.md',
    curl: true,
    baseUrl: 'https://fis.us-east-1.amazonaws.com',
  },
})
