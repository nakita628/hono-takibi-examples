import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rumble.run/2.15.0/openapi.yaml',
  output: './src/rumble-run/routes.ts',
  docs: {
    output: './src/rumble-run/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
