import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ssm-incidents/2018-05-10/openapi.yaml',
  output: './src/ssm-incidents/routes.ts',
  docs: {
    output: './src/ssm-incidents/api.md',
    curl: true,
    baseUrl: 'https://ssm-incidents.us-east-1.amazonaws.com',
  },
})
