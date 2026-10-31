import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/license_identifier.yaml',
  output: './src/3-1-license-identifier/routes.ts',
  docs: {
    output: './src/3-1-license-identifier/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
