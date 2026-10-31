import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotanalytics/2017-11-27/openapi.yaml',
  output: './src/iotanalytics/routes.ts',
  docs: {
    output: './src/iotanalytics/api.md',
    curl: true,
    baseUrl: 'https://iotanalytics.us-east-1.amazonaws.com',
  },
})
