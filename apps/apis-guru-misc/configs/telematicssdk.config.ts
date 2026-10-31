import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/telematicssdk.com/1.0.0/openapi.yaml',
  output: './src/telematicssdk/routes.ts',
  docs: {
    output: './src/telematicssdk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
