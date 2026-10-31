import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/schemas/2019-12-02/openapi.yaml',
  output: './src/schemas/routes.ts',
  docs: {
    output: './src/schemas/api.md',
    curl: true,
    baseUrl: 'https://schemas.us-east-1.amazonaws.com',
  },
})
