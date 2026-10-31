import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mgn/2020-02-26/openapi.yaml',
  output: './src/mgn/routes.ts',
  docs: {
    output: './src/mgn/api.md',
    curl: true,
    baseUrl: 'https://mgn.us-east-1.amazonaws.com',
  },
})
