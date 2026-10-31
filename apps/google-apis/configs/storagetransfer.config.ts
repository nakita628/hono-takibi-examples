import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/storagetransfer/v1/openapi.yaml',
  output: './src/storagetransfer/routes.ts',
  docs: {
    output: './src/storagetransfer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
