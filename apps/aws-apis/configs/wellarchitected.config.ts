import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/wellarchitected/2020-03-31/openapi.yaml',
  output: './src/wellarchitected/routes.ts',
  docs: {
    output: './src/wellarchitected/api.md',
    curl: true,
    baseUrl: 'https://wellarchitected.us-east-1.amazonaws.com',
  },
})
