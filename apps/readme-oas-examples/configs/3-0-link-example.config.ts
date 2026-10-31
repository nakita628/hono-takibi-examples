import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/link-example.yaml',
  output: './src/3-0-link-example/routes.ts',
  docs: {
    output: './src/3-0-link-example/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
