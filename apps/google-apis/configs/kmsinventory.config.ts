import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/kmsinventory/v1/openapi.yaml',
  output: './src/kmsinventory/routes.ts',
  docs: {
    output: './src/kmsinventory/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
