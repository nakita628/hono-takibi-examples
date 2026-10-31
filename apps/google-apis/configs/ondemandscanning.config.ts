import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/ondemandscanning/v1beta1/openapi.yaml',
  output: './src/ondemandscanning/routes.ts',
  docs: {
    output: './src/ondemandscanning/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
