import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apidapp.com/2019-02-14T164701Z/openapi.yaml',
  output: './src/apidapp/routes.ts',
  docs: {
    output: './src/apidapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
