import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kinesis-video-signaling/2019-12-04/openapi.yaml',
  output: './src/kinesis-video-signaling/routes.ts',
  docs: {
    output: './src/kinesis-video-signaling/api.md',
    curl: true,
    baseUrl: 'https://kinesis-video-signaling.us-east-1.amazonaws.com',
  },
})
