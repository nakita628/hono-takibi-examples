import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/71d901df-4c4c-40da-bb0a-41aa6f3b5533.yaml',
  output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/routes.ts',
  docs: {
    output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
