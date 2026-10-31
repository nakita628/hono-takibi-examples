import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/info_summary.yaml',
  output: './src/3-1-info-summary/routes.ts',
  docs: {
    output: './src/3-1-info-summary/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
