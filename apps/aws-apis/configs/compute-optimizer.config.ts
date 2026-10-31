import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/compute-optimizer/2019-11-01/openapi.yaml',
  output: './src/compute-optimizer/routes.ts',
  docs: {
    output: './src/compute-optimizer/api.md',
    curl: true,
    baseUrl: 'https://compute-optimizer.us-east-1.amazonaws.com',
  },
})
