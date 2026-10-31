import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/doubleclickbidmanager/v1.1/openapi.yaml',
  output: './src/doubleclickbidmanager/routes.ts',
  docs: {
    output: './src/doubleclickbidmanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
