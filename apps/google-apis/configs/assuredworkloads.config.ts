import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/assuredworkloads/v1beta1/openapi.yaml',
  output: './src/assuredworkloads/routes.ts',
  docs: {
    output: './src/assuredworkloads/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
