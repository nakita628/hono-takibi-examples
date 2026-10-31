import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/discriminators.yaml',
  output: './src/3-0-discriminators/routes.ts',
  docs: {
    output: './src/3-0-discriminators/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
