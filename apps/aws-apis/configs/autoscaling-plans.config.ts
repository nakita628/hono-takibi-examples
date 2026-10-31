import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/autoscaling-plans/2018-01-06/openapi.yaml',
  output: './src/autoscaling-plans/routes.ts',
  docs: {
    output: './src/autoscaling-plans/api.md',
    curl: true,
    baseUrl: 'https://autoscaling-plans.us-east-1.amazonaws.com',
  },
})
