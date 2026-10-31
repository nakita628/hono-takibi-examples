import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotwireless/2020-11-22/openapi.yaml',
  output: './src/iotwireless/routes.ts',
  docs: {
    output: './src/iotwireless/api.md',
    curl: true,
    baseUrl: 'https://iotwireless.us-east-1.amazonaws.com',
  },
})
