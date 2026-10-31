import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/acm-pca/2017-08-22/openapi.yaml',
  output: './src/acm-pca/routes.ts',
  docs: {
    output: './src/acm-pca/api.md',
    curl: true,
    baseUrl: 'https://acm-pca.us-east-1.amazonaws.com',
  },
})
