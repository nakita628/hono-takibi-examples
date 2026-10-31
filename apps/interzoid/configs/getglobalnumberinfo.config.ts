import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getglobalnumberinfo/1.0.0/openapi.yaml',
  output: './src/getglobalnumberinfo/routes.ts',
  docs: {
    output: './src/getglobalnumberinfo/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
