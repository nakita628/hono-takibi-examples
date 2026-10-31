import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/schema-deprecated.yaml',
  output: './src/3-0-schema-deprecated/routes.ts',
  docs: {
    output: './src/3-0-schema-deprecated/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
