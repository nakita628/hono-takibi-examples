import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sagemaker/2017-07-24/openapi.yaml',
  output: './src/sagemaker/routes.ts',
  docs: {
    output: './src/sagemaker/api.md',
    curl: true,
    baseUrl: 'https://sagemaker.us-east-1.amazonaws.com',
  },
})
