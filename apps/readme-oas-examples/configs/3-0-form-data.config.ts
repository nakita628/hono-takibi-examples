import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/form-data.yaml',
  output: './src/3-0-form-data/routes.ts',
  docs: {
    output: './src/3-0-form-data/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
