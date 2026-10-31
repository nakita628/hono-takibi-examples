import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/readme-extensions.yaml',
  output: './src/3-0-readme-extensions/routes.ts',
  docs: {
    output: './src/3-0-readme-extensions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
