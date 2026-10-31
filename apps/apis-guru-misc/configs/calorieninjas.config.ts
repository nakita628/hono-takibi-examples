import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/calorieninjas.com/1.0.0/openapi.yaml',
  output: './src/calorieninjas/routes.ts',
  docs: {
    output: './src/calorieninjas/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
