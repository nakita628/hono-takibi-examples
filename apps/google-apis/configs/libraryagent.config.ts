import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/libraryagent/v1/openapi.yaml',
  output: './src/libraryagent/routes.ts',
  docs: {
    output: './src/libraryagent/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
