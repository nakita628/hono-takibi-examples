import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloudhsmv2/2017-04-28/openapi.yaml',
  output: './src/cloudhsmv2/routes.ts',
  docs: {
    output: './src/cloudhsmv2/api.md',
    curl: true,
    baseUrl: 'https://cloudhsmv2.us-east-1.amazonaws.com',
  },
})
