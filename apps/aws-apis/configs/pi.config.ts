import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/pi/2018-02-27/openapi.yaml',
  output: './src/pi/routes.ts',
  docs: {
    output: './src/pi/api.md',
    curl: true,
    baseUrl: 'https://pi.us-east-1.amazonaws.com',
  },
})
