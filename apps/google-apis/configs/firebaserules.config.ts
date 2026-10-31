import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebaserules/v1/openapi.yaml',
  output: './src/firebaserules/routes.ts',
  docs: {
    output: './src/firebaserules/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
