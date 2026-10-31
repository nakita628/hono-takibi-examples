import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/robomaker/2018-06-29/openapi.yaml',
  output: './src/robomaker/routes.ts',
  docs: {
    output: './src/robomaker/api.md',
    curl: true,
    baseUrl: 'https://robomaker.us-east-1.amazonaws.com',
  },
})
