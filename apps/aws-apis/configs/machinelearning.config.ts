import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/machinelearning/2014-12-12/openapi.yaml',
  output: './src/machinelearning/routes.ts',
  docs: {
    output: './src/machinelearning/api.md',
    curl: true,
    baseUrl: 'https://machinelearning.us-east-1.amazonaws.com',
  },
})
