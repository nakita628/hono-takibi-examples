import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/serverlessrepo/2017-09-08/openapi.yaml',
  output: './src/serverlessrepo/routes.ts',
  docs: {
    output: './src/serverlessrepo/api.md',
    curl: true,
    baseUrl: 'https://serverlessrepo.us-east-1.amazonaws.com',
  },
})
