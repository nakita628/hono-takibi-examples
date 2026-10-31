import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/versioneye.com/v1/openapi.yaml',
  output: './src/versioneye/routes.ts',
  docs: {
    output: './src/versioneye/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
