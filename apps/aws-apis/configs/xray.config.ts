import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/xray/2016-04-12/openapi.yaml',
  output: './src/xray/routes.ts',
  docs: {
    output: './src/xray/api.md',
    curl: true,
    baseUrl: 'https://xray.us-east-1.amazonaws.com',
  },
})
