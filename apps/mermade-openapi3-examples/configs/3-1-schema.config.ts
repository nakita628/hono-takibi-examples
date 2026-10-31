import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/schema.yaml',
  output: './src/3-1-schema/routes.ts',
  docs: {
    output: './src/3-1-schema/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
