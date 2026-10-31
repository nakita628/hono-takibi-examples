import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/redhat.local/patchman-engine/v1.15.3/openapi.yaml',
  output: './src/redhat-patchman-engine/routes.ts',
  docs: {
    output: './src/redhat-patchman-engine/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
