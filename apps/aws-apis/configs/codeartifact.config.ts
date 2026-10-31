import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codeartifact/2018-09-22/openapi.yaml',
  output: './src/codeartifact/routes.ts',
  docs: {
    output: './src/codeartifact/api.md',
    curl: true,
    baseUrl: 'https://codeartifact.us-east-1.amazonaws.com',
  },
})
