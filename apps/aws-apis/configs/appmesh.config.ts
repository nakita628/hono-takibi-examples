import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/appmesh/2019-01-25/openapi.yaml',
  output: './src/appmesh/routes.ts',
  docs: {
    output: './src/appmesh/api.md',
    curl: true,
    baseUrl: 'https://appmesh.us-east-1.amazonaws.com',
  },
})
