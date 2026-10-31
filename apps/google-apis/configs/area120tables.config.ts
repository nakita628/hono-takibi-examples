import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/area120tables/v1alpha1/openapi.yaml',
  output: './src/area120tables/routes.ts',
  docs: {
    output: './src/area120tables/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
