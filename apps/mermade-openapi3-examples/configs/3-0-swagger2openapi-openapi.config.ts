import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/swagger2openapi/openapi.yaml',
  output: './src/3-0-swagger2openapi-openapi/routes.ts',
  docs: {
    output: './src/3-0-swagger2openapi-openapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
