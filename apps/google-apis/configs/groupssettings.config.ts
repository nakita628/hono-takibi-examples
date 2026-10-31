import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/groupssettings/v1/openapi.yaml',
  output: './src/groupssettings/routes.ts',
  docs: {
    output: './src/groupssettings/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
