import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/migrationcenter/v1alpha1/openapi.yaml',
  output: './src/migrationcenter/routes.ts',
  docs: {
    output: './src/migrationcenter/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
