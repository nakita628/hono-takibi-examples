import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/replicapool/v1beta1/openapi.yaml',
  output: './src/replicapool/routes.ts',
  docs: {
    output: './src/replicapool/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
