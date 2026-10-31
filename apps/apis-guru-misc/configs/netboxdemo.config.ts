import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/netboxdemo.com/2.8/openapi.yaml',
  output: './src/netboxdemo/routes.ts',
  docs: {
    output: './src/netboxdemo/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
