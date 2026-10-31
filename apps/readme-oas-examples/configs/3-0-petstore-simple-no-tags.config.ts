import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/petstore-simple-no-tags.yaml',
  output: './src/3-0-petstore-simple-no-tags/routes.ts',
  docs: {
    output: './src/3-0-petstore-simple-no-tags/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
