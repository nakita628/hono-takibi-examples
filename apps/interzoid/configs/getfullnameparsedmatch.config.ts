import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getfullnameparsedmatch/1.0.0/openapi.yaml',
  output: './src/getfullnameparsedmatch/routes.ts',
  docs: {
    output: './src/getfullnameparsedmatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
