import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/medialive/2017-10-14/openapi.yaml',
  output: './src/medialive/routes.ts',
  docs: {
    output: './src/medialive/api.md',
    curl: true,
    baseUrl: 'https://medialive.us-east-1.amazonaws.com',
  },
})
