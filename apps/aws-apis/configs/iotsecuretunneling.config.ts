import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotsecuretunneling/2018-10-05/openapi.yaml',
  output: './src/iotsecuretunneling/routes.ts',
  docs: {
    output: './src/iotsecuretunneling/api.md',
    curl: true,
    baseUrl: 'https://iotsecuretunneling.us-east-1.amazonaws.com',
  },
})
