import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/groundstation/2019-05-23/openapi.yaml',
  output: './src/groundstation/routes.ts',
  docs: {
    output: './src/groundstation/api.md',
    curl: true,
    baseUrl: 'https://groundstation.us-east-1.amazonaws.com',
  },
})
