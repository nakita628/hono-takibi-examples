import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/petstore-expanded.yaml',
  output: './src/3-0-petstore-expanded/routes.ts',
  docs: {
    output: './src/3-0-petstore-expanded/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
