import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/polymorphism.yaml',
  output: './src/3-0-polymorphism/routes.ts',
  docs: {
    output: './src/3-0-polymorphism/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
