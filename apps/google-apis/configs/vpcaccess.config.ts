import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/vpcaccess/v1/openapi.yaml',
  output: './src/vpcaccess/routes.ts',
  docs: {
    output: './src/vpcaccess/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
