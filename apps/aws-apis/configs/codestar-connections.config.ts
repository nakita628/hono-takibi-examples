import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codestar-connections/2019-12-01/openapi.yaml',
  output: './src/codestar-connections/routes.ts',
  docs: {
    output: './src/codestar-connections/api.md',
    curl: true,
    baseUrl: 'https://codestar-connections.us-east-1.amazonaws.com',
  },
})
