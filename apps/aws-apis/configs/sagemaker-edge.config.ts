import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sagemaker-edge/2020-09-23/openapi.yaml',
  output: './src/sagemaker-edge/routes.ts',
  docs: {
    output: './src/sagemaker-edge/api.md',
    curl: true,
    baseUrl: 'https://sagemaker-edge.us-east-1.amazonaws.com',
  },
})
