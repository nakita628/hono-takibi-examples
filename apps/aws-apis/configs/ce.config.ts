import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ce/2017-10-25/openapi.yaml',
  output: './src/ce/routes.ts',
  docs: {
    output: './src/ce/api.md',
    curl: true,
    baseUrl: 'https://ce.us-east-1.amazonaws.com',
  },
})
