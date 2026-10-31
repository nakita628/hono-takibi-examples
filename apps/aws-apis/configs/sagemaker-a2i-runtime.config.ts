import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sagemaker-a2i-runtime/2019-11-07/openapi.yaml',
  output: './src/sagemaker-a2i-runtime/routes.ts',
  docs: {
    output: './src/sagemaker-a2i-runtime/api.md',
    curl: true,
    baseUrl: 'https://sagemaker-a2i-runtime.us-east-1.amazonaws.com',
  },
})
