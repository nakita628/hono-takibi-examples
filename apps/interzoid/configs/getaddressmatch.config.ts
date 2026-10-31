import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getaddressmatch/1.0.0/openapi.yaml',
  output: './src/getaddressmatch/routes.ts',
  docs: {
    output: './src/getaddressmatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
