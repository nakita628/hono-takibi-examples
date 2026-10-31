import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/speech/v2beta1/openapi.yaml',
  output: './src/speech/routes.ts',
  docs: {
    output: './src/speech/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
