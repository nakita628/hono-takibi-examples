import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ivs/2020-07-14/openapi.yaml',
  output: './src/ivs/routes.ts',
  docs: {
    output: './src/ivs/api.md',
    curl: true,
    baseUrl: 'https://ivs.us-east-1.amazonaws.com',
  },
})
