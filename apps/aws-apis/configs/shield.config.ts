import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/shield/2016-06-02/openapi.yaml',
  output: './src/shield/routes.ts',
  docs: {
    output: './src/shield/api.md',
    curl: true,
    baseUrl: 'https://shield.us-east-1.amazonaws.com',
  },
})
