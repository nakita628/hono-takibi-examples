import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iot-jobs-data/2017-09-29/openapi.yaml',
  output: './src/iot-jobs-data/routes.ts',
  docs: {
    output: './src/iot-jobs-data/api.md',
    curl: true,
    baseUrl: 'https://iot-jobs-data.us-east-1.amazonaws.com',
  },
})
