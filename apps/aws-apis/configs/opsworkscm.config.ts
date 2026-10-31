import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/opsworkscm/2016-11-01/openapi.yaml',
  output: './src/opsworkscm/routes.ts',
  docs: {
    output: './src/opsworkscm/api.md',
    curl: true,
    baseUrl: 'https://opsworkscm.us-east-1.amazonaws.com',
  },
})
