import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/artifactregistry/v1beta2/openapi.yaml',
  output: './src/artifactregistry/routes.ts',
  docs: {
    output: './src/artifactregistry/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
