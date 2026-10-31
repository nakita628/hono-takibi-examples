import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datamigration/v1beta1/openapi.yaml',
  output: './src/datamigration/routes.ts',
  docs: {
    output: './src/datamigration/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
