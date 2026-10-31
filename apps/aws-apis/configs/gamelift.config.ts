import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/gamelift/2015-10-01/openapi.yaml',
  output: './src/gamelift/routes.ts',
  docs: {
    output: './src/gamelift/api.md',
    curl: true,
    baseUrl: 'https://gamelift.us-east-1.amazonaws.com',
  },
})
