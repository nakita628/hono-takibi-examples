import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/thebluealliance.com/3.8.2/openapi.yaml',
  output: './src/thebluealliance/routes.ts',
  docs: {
    output: './src/thebluealliance/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
