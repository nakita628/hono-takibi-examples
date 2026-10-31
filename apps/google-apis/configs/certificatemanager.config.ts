import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/certificatemanager/v1/openapi.yaml',
  output: './src/certificatemanager/routes.ts',
  docs: {
    output: './src/certificatemanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
