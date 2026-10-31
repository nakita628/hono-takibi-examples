import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/backup/2018-11-15/openapi.yaml',
  output: './src/backup/routes.ts',
  docs: {
    output: './src/backup/api.md',
    curl: true,
    baseUrl: 'https://backup.us-east-1.amazonaws.com',
  },
})
