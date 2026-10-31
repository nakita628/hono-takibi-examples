import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/autoscaling/2011-01-01/openapi.yaml',
  output: './src/autoscaling/routes.ts',
  docs: {
    output: './src/autoscaling/api.md',
    curl: true,
    baseUrl: 'https://autoscaling.us-east-1.amazonaws.com',
  },
})
