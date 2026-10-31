import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mozilla.com/kinto/1.22/openapi.yaml',
  output: './src/mozilla-kinto/routes.ts',
  docs: {
    output: './src/mozilla-kinto/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
