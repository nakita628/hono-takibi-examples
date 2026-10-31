import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Profile-System/1.0/openapi.yaml',
  output: './src/profile-system/routes.ts',
  docs: {
    output: './src/profile-system/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
