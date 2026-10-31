import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/response-http-behavior.yaml',
  output: './src/3-0-response-http-behavior/routes.ts',
  docs: {
    output: './src/3-0-response-http-behavior/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
