import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getemailinfo/1.0.0/openapi.yaml',
  output: './src/getemailinfo/routes.ts',
  docs: {
    output: './src/getemailinfo/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
