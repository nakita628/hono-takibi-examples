import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediaconvert/2017-08-29/openapi.yaml',
  output: './src/mediaconvert/routes.ts',
  docs: {
    output: './src/mediaconvert/api.md',
    curl: true,
    baseUrl: 'https://mediaconvert.us-east-1.amazonaws.com',
  },
})
