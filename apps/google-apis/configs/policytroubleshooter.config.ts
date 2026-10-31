import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/policytroubleshooter/v1/openapi.yaml',
  output: './src/policytroubleshooter/routes.ts',
  docs: {
    output: './src/policytroubleshooter/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
