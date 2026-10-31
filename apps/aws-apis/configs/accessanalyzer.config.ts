import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/accessanalyzer/2019-11-01/openapi.yaml',
  output: './src/accessanalyzer/routes.ts',
  docs: {
    output: './src/accessanalyzer/api.md',
    curl: true,
    baseUrl: 'https://accessanalyzer.us-east-1.amazonaws.com',
  },
})
