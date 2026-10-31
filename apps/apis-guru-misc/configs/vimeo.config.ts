import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vimeo.com/3.4/openapi.yaml',
  output: './src/vimeo/routes.ts',
  docs: {
    output: './src/vimeo/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
