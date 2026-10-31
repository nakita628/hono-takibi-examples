import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/rds-data/2018-08-01/openapi.yaml',
  output: './src/rds-data/routes.ts',
  docs: {
    output: './src/rds-data/api.md',
    curl: true,
    baseUrl: 'https://rds-data.us-east-1.amazonaws.com',
  },
})
