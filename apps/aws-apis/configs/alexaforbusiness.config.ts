import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/alexaforbusiness/2017-11-09/openapi.yaml',
  output: './src/alexaforbusiness/routes.ts',
  docs: {
    output: './src/alexaforbusiness/api.md',
    curl: true,
    baseUrl: 'https://alexaforbusiness.us-east-1.amazonaws.com',
  },
})
