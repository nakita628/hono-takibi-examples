import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/swf/2012-01-25/openapi.yaml',
  output: './src/swf/routes.ts',
  docs: {
    output: './src/swf/api.md',
    curl: true,
    baseUrl: 'https://swf.us-east-1.amazonaws.com',
  },
})
