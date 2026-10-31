import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/cognitiveservices-Prediction/3.0/openapi.yaml',
  output: './src/microsoft-cognitiveservices-prediction/routes.ts',
  docs: {
    output: './src/microsoft-cognitiveservices-prediction/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
