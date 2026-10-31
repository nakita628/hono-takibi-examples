import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kinesis-video-media/2017-09-30/openapi.yaml',
  output: './src/kinesis-video-media/routes.ts',
  docs: {
    output: './src/kinesis-video-media/api.md',
    curl: true,
    baseUrl: 'https://kinesis-video-media.us-east-1.amazonaws.com',
  },
})
