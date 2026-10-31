import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/organizations/2016-11-28/openapi.yaml',
  output: './src/organizations/routes.ts',
  docs: {
    output: './src/organizations/api.md',
    curl: true,
    baseUrl: 'https://organizations.us-east-1.amazonaws.com',
  },
})
