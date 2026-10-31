import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/discoveryengine/v1beta/openapi.yaml',
  output: './src/discoveryengine/routes.ts',
  docs: {
    output: './src/discoveryengine/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
