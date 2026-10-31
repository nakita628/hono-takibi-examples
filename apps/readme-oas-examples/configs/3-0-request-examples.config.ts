import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/request-examples.yaml',
  output: './src/3-0-request-examples/routes.ts',
  docs: {
    output: './src/3-0-request-examples/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
