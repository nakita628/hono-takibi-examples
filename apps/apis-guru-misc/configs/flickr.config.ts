import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/flickr.com/1.0.0/openapi.yaml',
  output: './src/flickr/routes.ts',
  docs: {
    output: './src/flickr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
