import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getfullnamematch/1.0.0/openapi.yaml',
  output: './src/getfullnamematch/routes.ts',
  docs: {
    output: './src/getfullnamematch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
