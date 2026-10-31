import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloudsearchdomain/2013-01-01/openapi.yaml',
  output: './src/cloudsearchdomain/routes.ts',
  docs: {
    output: './src/cloudsearchdomain/api.md',
    curl: true,
    baseUrl: 'https://cloudsearchdomain.us-east-1.amazonaws.com',
  },
})
