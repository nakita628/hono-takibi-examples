import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/dataexchange/2017-07-25/openapi.yaml',
  output: './src/dataexchange/routes.ts',
  docs: {
    output: './src/dataexchange/api.md',
    curl: true,
    baseUrl: 'https://dataexchange.us-east-1.amazonaws.com',
  },
})
