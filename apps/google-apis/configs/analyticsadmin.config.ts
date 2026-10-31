import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/analyticsadmin/v1beta/openapi.yaml',
  output: './src/analyticsadmin/routes.ts',
  docs: {
    output: './src/analyticsadmin/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
