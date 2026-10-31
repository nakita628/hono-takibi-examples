import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotdeviceadvisor/2020-09-18/openapi.yaml',
  output: './src/iotdeviceadvisor/routes.ts',
  docs: {
    output: './src/iotdeviceadvisor/api.md',
    curl: true,
    baseUrl: 'https://iotdeviceadvisor.us-east-1.amazonaws.com',
  },
})
