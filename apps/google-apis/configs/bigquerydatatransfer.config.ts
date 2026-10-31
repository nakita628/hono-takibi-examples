import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/bigquerydatatransfer/v1/openapi.yaml',
  output: './src/bigquerydatatransfer/routes.ts',
  docs: {
    output: './src/bigquerydatatransfer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
