import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediaconnect/2018-11-14/openapi.yaml',
  output: './src/mediaconnect/routes.ts',
  docs: {
    output: './src/mediaconnect/api.md',
    curl: true,
    baseUrl: 'https://mediaconnect.us-east-1.amazonaws.com',
  },
})
