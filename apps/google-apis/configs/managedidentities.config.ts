import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/managedidentities/v1alpha1/openapi.yaml',
  output: './src/managedidentities/routes.ts',
  docs: {
    output: './src/managedidentities/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
