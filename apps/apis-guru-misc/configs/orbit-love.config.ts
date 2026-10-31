import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/orbit.love/v1/openapi.yaml',
  output: './src/orbit-love/routes.ts',
  docs: {
    output: './src/orbit-love/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
