import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/workstations/v1beta/openapi.yaml',
  output: './src/workstations/routes.ts',
  docs: {
    output: './src/workstations/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
