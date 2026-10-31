import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iot1click-projects/2018-05-14/openapi.yaml',
  output: './src/iot1click-projects/routes.ts',
  docs: {
    output: './src/iot1click-projects/api.md',
    curl: true,
    baseUrl: 'https://iot1click-projects.us-east-1.amazonaws.com',
  },
})
