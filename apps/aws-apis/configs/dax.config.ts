import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/dax/2017-04-19/openapi.yaml',
  output: './src/dax/routes.ts',
  docs: {
    output: './src/dax/api.md',
    curl: true,
    baseUrl: 'https://dax.us-east-1.amazonaws.com',
  },
})
