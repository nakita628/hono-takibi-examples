import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotevents-data/2018-10-23/openapi.yaml',
  output: './src/iotevents-data/routes.ts',
  docs: {
    output: './src/iotevents-data/api.md',
    curl: true,
    baseUrl: 'https://iotevents-data.us-east-1.amazonaws.com',
  },
})
