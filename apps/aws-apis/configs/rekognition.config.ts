import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/rekognition/2016-06-27/openapi.yaml',
  output: './src/rekognition/routes.ts',
  docs: {
    output: './src/rekognition/api.md',
    curl: true,
    baseUrl: 'https://rekognition.us-east-1.amazonaws.com',
  },
})
