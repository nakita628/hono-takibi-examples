import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iot/2015-05-28/openapi.yaml',
  output: './src/iot/routes.ts',
  docs: {
    output: './src/iot/api.md',
    curl: true,
    baseUrl: 'https://iot.us-east-1.amazonaws.com',
  },
})
