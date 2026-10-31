import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/application-insights/2018-11-25/openapi.yaml',
  output: './src/application-insights/routes.ts',
  docs: {
    output: './src/application-insights/api.md',
    curl: true,
    baseUrl: 'https://application-insights.us-east-1.amazonaws.com',
  },
})
