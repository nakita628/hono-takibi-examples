import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/star-trek.yaml',
  output: './src/3-0-star-trek/routes.ts',
  docs: {
    output: './src/3-0-star-trek/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
