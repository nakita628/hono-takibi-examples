import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/6-dot-authentiqio.appspot.com/6/openapi.yaml',
  output: './src/6-dot-authentiqio-appspot/routes.ts',
  docs: {
    output: './src/6-dot-authentiqio-appspot/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
