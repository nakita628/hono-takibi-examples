import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/runtime.sagemaker/2017-05-13/openapi.yaml',
  output: './src/runtime-sagemaker/routes.ts',
  docs: {
    output: './src/runtime-sagemaker/api.md',
    curl: true,
    baseUrl: 'https://runtime-sagemaker.us-east-1.amazonaws.com',
  },
})
