import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/healthlake/2017-07-01/openapi.yaml',
  output: './src/healthlake/routes.ts',
  docs: {
    output: './src/healthlake/api.md',
    curl: true,
    baseUrl: 'https://healthlake.us-east-1.amazonaws.com',
  },
})
