import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/intellifi.nl/2.23.2+0.gfbc3926.dirty/openapi.yaml',
  output: './src/intellifi-nl/routes.ts',
  docs: {
    output: './src/intellifi-nl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
