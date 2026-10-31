import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/billingbudgets/v1beta1/openapi.yaml',
  output: './src/billingbudgets/routes.ts',
  docs: {
    output: './src/billingbudgets/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
