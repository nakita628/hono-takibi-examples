import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/orthanc-server.com/1.11.3/openapi.yaml',
  output: './src/orthanc-server/routes.ts',
  docs: {
    output: './src/orthanc-server/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
