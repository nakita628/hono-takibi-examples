import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mobile/2017-07-01/openapi.yaml',
  output: './src/mobile/routes.ts',
  docs: {
    output: './src/mobile/api.md',
    curl: true,
    baseUrl: 'https://mobile.us-east-1.amazonaws.com',
  },
})
