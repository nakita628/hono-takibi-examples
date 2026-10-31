import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/baremetalsolution/v2/openapi.yaml',
  output: './src/baremetalsolution/routes.ts',
  docs: {
    output: './src/baremetalsolution/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
