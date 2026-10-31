import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/schema-encoding-style.yaml',
  output: './src/3-1-schema-encoding-style/routes.ts',
  docs: {
    output: './src/3-1-schema-encoding-style/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
