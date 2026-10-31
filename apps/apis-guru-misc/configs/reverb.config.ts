import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/reverb.com/3.0/openapi.yaml',
  output: './src/reverb/routes.ts',
  docs: {
    output: './src/reverb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
