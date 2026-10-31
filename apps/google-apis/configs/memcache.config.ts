import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/memcache/v1beta2/openapi.yaml',
  output: './src/memcache/routes.ts',
  docs: {
    output: './src/memcache/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
