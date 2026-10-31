import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mobileanalytics/2014-06-05/openapi.yaml',
  output: './src/mobileanalytics/routes.ts',
  docs: {
    output: './src/mobileanalytics/api.md',
    curl: true,
    baseUrl: 'https://mobileanalytics.us-east-1.amazonaws.com',
  },
})
