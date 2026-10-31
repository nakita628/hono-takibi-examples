import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/application-autoscaling/2016-02-06/openapi.yaml',
  output: './src/application-autoscaling/routes.ts',
  docs: {
    output: './src/application-autoscaling/api.md',
    curl: true,
    baseUrl: 'https://application-autoscaling.us-east-1.amazonaws.com',
  },
})
