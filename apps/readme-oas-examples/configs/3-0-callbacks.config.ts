import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/callbacks.yaml',
  output: './src/3-0-callbacks/routes.ts',
  docs: {
    output: './src/3-0-callbacks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
