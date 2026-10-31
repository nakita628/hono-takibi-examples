import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/smartdevicemanagement/v1/openapi.yaml',
  output: './src/smartdevicemanagement/routes.ts',
  docs: {
    output: './src/smartdevicemanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
