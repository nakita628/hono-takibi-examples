import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/servicecontrol/v2/openapi.yaml',
  output: './src/servicecontrol/routes.ts',
  docs: {
    output: './src/servicecontrol/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
