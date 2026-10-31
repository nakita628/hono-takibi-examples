import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/businessprofileperformance/v1/openapi.yaml',
  output: './src/businessprofileperformance/routes.ts',
  docs: {
    output: './src/businessprofileperformance/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
