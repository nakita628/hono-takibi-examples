import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/netlicensing.io/2.x/openapi.yaml',
  output: './src/netlicensing-io/routes.ts',
  docs: {
    output: './src/netlicensing-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
