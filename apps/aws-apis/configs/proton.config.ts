import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/proton/2020-07-20/openapi.yaml',
  output: './src/proton/routes.ts',
  docs: {
    output: './src/proton/api.md',
    curl: true,
    baseUrl: 'https://proton.us-east-1.amazonaws.com',
  },
})
