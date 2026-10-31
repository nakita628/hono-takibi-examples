import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/parameters-cookies.yaml',
  output: './src/3-0-parameters-cookies/routes.ts',
  docs: {
    output: './src/3-0-parameters-cookies/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
