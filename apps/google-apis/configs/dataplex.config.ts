import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dataplex/v1/openapi.yaml',
  output: './src/dataplex/routes.ts',
  docs: {
    output: './src/dataplex/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
