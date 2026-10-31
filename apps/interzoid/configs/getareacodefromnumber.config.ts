import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getareacodefromnumber/1.0.0/openapi.yaml',
  output: './src/getareacodefromnumber/routes.ts',
  docs: {
    output: './src/getareacodefromnumber/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
