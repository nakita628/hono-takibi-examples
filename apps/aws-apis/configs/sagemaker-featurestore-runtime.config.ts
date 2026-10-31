import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sagemaker-featurestore-runtime/2020-07-01/openapi.yaml',
  output: './src/sagemaker-featurestore-runtime/routes.ts',
  docs: {
    output: './src/sagemaker-featurestore-runtime/api.md',
    curl: true,
    baseUrl: 'https://sagemaker-featurestore-runtime.us-east-1.amazonaws.com',
  },
})
