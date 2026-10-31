import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gamesConfiguration/v1configuration/openapi.yaml',
  output: './src/gamesconfiguration/routes.ts',
  docs: {
    output: './src/gamesconfiguration/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
