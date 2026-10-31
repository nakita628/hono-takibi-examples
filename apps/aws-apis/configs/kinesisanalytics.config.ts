import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kinesisanalytics/2015-08-14/openapi.yaml',
  output: './src/kinesisanalytics/routes.ts',
  docs: {
    output: './src/kinesisanalytics/api.md',
    curl: true,
    baseUrl: 'https://kinesisanalytics.us-east-1.amazonaws.com',
  },
})
