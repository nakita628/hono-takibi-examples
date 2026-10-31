import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/schema-validation-top-level.yaml',
  output: './src/3-1-schema-validation-top-level/routes.ts',
  docs: {
    output: './src/3-1-schema-validation-top-level/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
