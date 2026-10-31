import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/policysimulator/v1beta/openapi.yaml',
  output: './src/policysimulator/routes.ts',
  docs: {
    output: './src/policysimulator/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
