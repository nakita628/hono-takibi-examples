import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/trafficdirector/v2/openapi.yaml',
  output: './src/trafficdirector/routes.ts',
  docs: {
    output: './src/trafficdirector/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
