import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/transcribe/2017-10-26/openapi.yaml',
  output: './src/transcribe/routes.ts',
  docs: {
    output: './src/transcribe/api.md',
    curl: true,
    baseUrl: 'https://transcribe.us-east-1.amazonaws.com',
  },
})
