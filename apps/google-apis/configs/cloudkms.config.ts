import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudkms/v1/openapi.yaml',
  output: './src/cloudkms/routes.ts',
  docs: {
    output: './src/cloudkms/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
