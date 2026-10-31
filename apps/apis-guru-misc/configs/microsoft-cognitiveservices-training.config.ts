import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/cognitiveservices-Training/3.2/openapi.yaml',
  output: './src/microsoft-cognitiveservices-training/routes.ts',
  docs: {
    output: './src/microsoft-cognitiveservices-training/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
