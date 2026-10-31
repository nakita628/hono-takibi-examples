import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iot1click-devices/2018-05-14/openapi.yaml',
  output: './src/iot1click-devices/routes.ts',
  docs: {
    output: './src/iot1click-devices/api.md',
    curl: true,
    baseUrl: 'https://iot1click-devices.us-east-1.amazonaws.com',
  },
})
