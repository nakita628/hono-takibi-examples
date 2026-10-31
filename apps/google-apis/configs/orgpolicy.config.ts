import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/orgpolicy/v2/openapi.yaml',
  output: './src/orgpolicy/routes.ts',
  docs: {
    output: './src/orgpolicy/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
