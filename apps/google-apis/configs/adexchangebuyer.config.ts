import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/adexchangebuyer/v1.4/openapi.yaml',
  output: './src/adexchangebuyer/routes.ts',
  docs: {
    output: './src/adexchangebuyer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
