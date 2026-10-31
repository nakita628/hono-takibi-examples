import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/importexport/2010-06-01/openapi.yaml',
  output: './src/importexport/routes.ts',
  docs: {
    output: './src/importexport/api.md',
    curl: true,
    baseUrl: 'https://importexport.us-east-1.amazonaws.com',
  },
})
