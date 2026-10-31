import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fiendish/ref-encoding3.yaml',
  output: './src/3-0-fiendish-ref-encoding3/routes.ts',
  docs: {
    output: './src/3-0-fiendish-ref-encoding3/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
