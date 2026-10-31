import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elasticfilesystem/2015-02-01/openapi.yaml',
  output: './src/elasticfilesystem/routes.ts',
  docs: {
    output: './src/elasticfilesystem/api.md',
    curl: true,
    baseUrl: 'https://elasticfilesystem.us-east-1.amazonaws.com',
  },
})
