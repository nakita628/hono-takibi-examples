import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/adexchangebuyer2/v2beta1/openapi.yaml',
  output: './src/adexchangebuyer2/routes.ts',
  docs: {
    output: './src/adexchangebuyer2/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
