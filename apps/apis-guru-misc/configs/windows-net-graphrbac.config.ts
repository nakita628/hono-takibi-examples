import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/windows.net/graphrbac/1.6/openapi.yaml',
  output: './src/windows-net-graphrbac/routes.ts',
  docs: {
    output: './src/windows-net-graphrbac/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
