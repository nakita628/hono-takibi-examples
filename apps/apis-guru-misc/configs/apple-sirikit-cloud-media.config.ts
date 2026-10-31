import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apple.com/sirikit-cloud-media/1.0.2/openapi.yaml',
  output: './src/apple-sirikit-cloud-media/routes.ts',
  docs: {
    output: './src/apple-sirikit-cloud-media/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
