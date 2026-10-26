import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Square Connect API (square/connect-api-specification)
  input: 'https://raw.githubusercontent.com/square/connect-api-specification/master/api.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://connect.squareup.com',
  },
})
