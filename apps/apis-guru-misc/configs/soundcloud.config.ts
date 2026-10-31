import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/soundcloud.com/1.0.0/openapi.yaml',
  output: './src/soundcloud/routes.ts',
  docs: {
    output: './src/soundcloud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
