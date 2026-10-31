import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/discovery/2015-11-01/openapi.yaml',
  output: './src/discovery/routes.ts',
  docs: {
    output: './src/discovery/api.md',
    curl: true,
    baseUrl: 'https://discovery.us-east-1.amazonaws.com',
  },
})
