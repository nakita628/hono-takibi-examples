import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/appengine/v1beta/openapi.yaml',
  output: './src/appengine/routes.ts',
  docs: {
    output: './src/appengine/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
