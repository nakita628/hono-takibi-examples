import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloudhsm/2014-05-30/openapi.yaml',
  output: './src/cloudhsm/routes.ts',
  docs: {
    output: './src/cloudhsm/api.md',
    curl: true,
    baseUrl: 'https://cloudhsm.us-east-1.amazonaws.com',
  },
})
