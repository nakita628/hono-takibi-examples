import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/config/2014-11-12/openapi.yaml',
  output: './src/config/routes.ts',
  docs: {
    output: './src/config/api.md',
    curl: true,
    baseUrl: 'https://config.us-east-1.amazonaws.com',
  },
})
