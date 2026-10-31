import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/schema-circular.yaml',
  output: './src/3-0-schema-circular/routes.ts',
  docs: {
    output: './src/3-0-schema-circular/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
