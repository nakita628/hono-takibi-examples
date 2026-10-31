import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/es/2015-01-01/openapi.yaml',
  output: './src/es/routes.ts',
  docs: {
    output: './src/es/api.md',
    curl: true,
    baseUrl: 'https://es.us-east-1.amazonaws.com',
  },
})
