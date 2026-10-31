import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lakeformation/2017-03-31/openapi.yaml',
  output: './src/lakeformation/routes.ts',
  docs: {
    output: './src/lakeformation/api.md',
    curl: true,
    baseUrl: 'https://lakeformation.us-east-1.amazonaws.com',
  },
})
