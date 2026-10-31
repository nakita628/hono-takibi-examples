import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/train-travel.yaml',
  output: './src/3-1-train-travel/routes.ts',
  docs: {
    output: './src/3-1-train-travel/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
