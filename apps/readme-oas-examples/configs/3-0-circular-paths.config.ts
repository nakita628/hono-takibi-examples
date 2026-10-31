import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/circular-paths.yaml',
  output: './src/3-0-circular-paths/routes.ts',
  docs: {
    output: './src/3-0-circular-paths/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
