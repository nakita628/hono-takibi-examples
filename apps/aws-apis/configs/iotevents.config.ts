import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotevents/2018-07-27/openapi.yaml',
  output: './src/iotevents/routes.ts',
  docs: {
    output: './src/iotevents/api.md',
    curl: true,
    baseUrl: 'https://iotevents.us-east-1.amazonaws.com',
  },
})
