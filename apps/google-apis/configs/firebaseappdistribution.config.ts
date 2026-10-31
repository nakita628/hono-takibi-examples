import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebaseappdistribution/v1/openapi.yaml',
  output: './src/firebaseappdistribution/routes.ts',
  docs: {
    output: './src/firebaseappdistribution/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
