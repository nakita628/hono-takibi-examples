import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iot-data/2015-05-28/openapi.yaml',
  output: './src/iot-data/routes.ts',
  docs: {
    output: './src/iot-data/api.md',
    curl: true,
    baseUrl: 'https://iot-data.us-east-1.amazonaws.com',
  },
})
