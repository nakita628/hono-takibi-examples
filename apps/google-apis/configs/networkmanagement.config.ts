import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/networkmanagement/v1beta1/openapi.yaml',
  output: './src/networkmanagement/routes.ts',
  docs: {
    output: './src/networkmanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
