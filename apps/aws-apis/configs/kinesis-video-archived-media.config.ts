import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kinesis-video-archived-media/2017-09-30/openapi.yaml',
  output: './src/kinesis-video-archived-media/routes.ts',
  docs: {
    output: './src/kinesis-video-archived-media/api.md',
    curl: true,
    baseUrl: 'https://kinesis-video-archived-media.us-east-1.amazonaws.com',
  },
})
