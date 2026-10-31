import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/e0c69574-9408-4c46-baac-5d3b98b46b67.yaml',
  output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/routes.ts',
  docs: {
    output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
