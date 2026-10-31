import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/versionhistory/v1/openapi.yaml',
  output: './src/versionhistory/routes.ts',
  docs: {
    output: './src/versionhistory/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
