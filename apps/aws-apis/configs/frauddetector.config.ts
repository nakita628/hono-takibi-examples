import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/frauddetector/2019-11-15/openapi.yaml',
  output: './src/frauddetector/routes.ts',
  docs: {
    output: './src/frauddetector/api.md',
    curl: true,
    baseUrl: 'https://frauddetector.us-east-1.amazonaws.com',
  },
})
