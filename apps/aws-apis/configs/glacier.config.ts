import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/glacier/2012-06-01/openapi.yaml',
  output: './src/glacier/routes.ts',
  docs: {
    output: './src/glacier/api.md',
    curl: true,
    baseUrl: 'https://glacier.us-east-1.amazonaws.com',
  },
})
