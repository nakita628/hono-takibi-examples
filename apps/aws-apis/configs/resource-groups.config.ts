import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/resource-groups/2017-11-27/openapi.yaml',
  output: './src/resource-groups/routes.ts',
  docs: {
    output: './src/resource-groups/api.md',
    curl: true,
    baseUrl: 'https://resource-groups.us-east-1.amazonaws.com',
  },
})
