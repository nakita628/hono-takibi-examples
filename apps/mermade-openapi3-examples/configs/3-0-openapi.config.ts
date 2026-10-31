import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/openapi.yaml',
  output: './src/3-0-openapi/routes.ts',
  docs: {
    output: './src/3-0-openapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
