import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/workspaces/2015-04-08/openapi.yaml',
  output: './src/workspaces/routes.ts',
  docs: {
    output: './src/workspaces/api.md',
    curl: true,
    baseUrl: 'https://workspaces.us-east-1.amazonaws.com',
  },
})
