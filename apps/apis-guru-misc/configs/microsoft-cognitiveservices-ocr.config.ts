import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/cognitiveservices-Ocr/2.1/openapi.yaml',
  output: './src/microsoft-cognitiveservices-ocr/routes.ts',
  docs: {
    output: './src/microsoft-cognitiveservices-ocr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
