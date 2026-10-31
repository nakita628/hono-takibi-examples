import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/vmmigration/v1alpha1/openapi.yaml',
  output: './src/vmmigration/routes.ts',
  docs: {
    output: './src/vmmigration/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
