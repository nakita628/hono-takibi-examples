import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/fsx/2018-03-01/openapi.yaml',
  output: './src/fsx/routes.ts',
  docs: {
    output: './src/fsx/api.md',
    curl: true,
    baseUrl: 'https://fsx.us-east-1.amazonaws.com',
  },
})
