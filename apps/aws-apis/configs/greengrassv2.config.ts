import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/greengrassv2/2020-11-30/openapi.yaml',
  output: './src/greengrassv2/routes.ts',
  docs: {
    output: './src/greengrassv2/api.md',
    curl: true,
    baseUrl: 'https://greengrassv2.us-east-1.amazonaws.com',
  },
})
