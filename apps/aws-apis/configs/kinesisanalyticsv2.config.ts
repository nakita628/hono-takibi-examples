import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kinesisanalyticsv2/2018-05-23/openapi.yaml',
  output: './src/kinesisanalyticsv2/routes.ts',
  docs: {
    output: './src/kinesisanalyticsv2/api.md',
    curl: true,
    baseUrl: 'https://kinesisanalyticsv2.us-east-1.amazonaws.com',
  },
})
