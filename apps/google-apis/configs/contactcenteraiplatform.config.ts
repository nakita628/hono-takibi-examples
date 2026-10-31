import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/contactcenteraiplatform/v1alpha1/openapi.yaml',
  output: './src/contactcenteraiplatform/routes.ts',
  docs: {
    output: './src/contactcenteraiplatform/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
