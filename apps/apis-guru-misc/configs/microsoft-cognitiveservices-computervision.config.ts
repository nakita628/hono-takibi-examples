import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/cognitiveservices-ComputerVision/2.1/openapi.yaml',
  output: './src/microsoft-cognitiveservices-computervision/routes.ts',
  docs: {
    output: './src/microsoft-cognitiveservices-computervision/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
