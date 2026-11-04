import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Telnyx API v2, OpenAPI 3 published by Telnyx:
  // https://github.com/team-telnyx/openapi/blob/master/openapi/spec3.json
  input:
    'https://raw.githubusercontent.com/team-telnyx/openapi/master/openapi/spec3.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.telnyx.com/v2',
  },
})
