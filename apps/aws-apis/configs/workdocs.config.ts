import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/workdocs/2016-05-01/openapi.yaml',
  output: './src/workdocs/routes.ts',
  docs: {
    output: './src/workdocs/api.md',
    curl: true,
    baseUrl: 'https://workdocs.us-east-1.amazonaws.com',
  },
})
