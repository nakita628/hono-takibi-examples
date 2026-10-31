import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/extendsclass.com/json-storage/0.1/openapi.yaml',
  output: './src/extendsclass-json-storage/routes.ts',
  docs: {
    output: './src/extendsclass-json-storage/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
