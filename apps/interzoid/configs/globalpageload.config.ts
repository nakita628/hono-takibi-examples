import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/globalpageload/1.0.0/openapi.yaml',
  output: './src/globalpageload/routes.ts',
  docs: {
    output: './src/globalpageload/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
