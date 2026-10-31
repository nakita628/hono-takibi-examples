import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/elevenlabs.io/1.0/openapi.yaml',
  output: './src/elevenlabs-io/routes.ts',
  docs: {
    output: './src/elevenlabs-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
