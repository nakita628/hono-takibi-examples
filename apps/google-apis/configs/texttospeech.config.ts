import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/texttospeech/v1beta1/openapi.yaml',
  output: './src/texttospeech/routes.ts',
  docs: {
    output: './src/texttospeech/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
