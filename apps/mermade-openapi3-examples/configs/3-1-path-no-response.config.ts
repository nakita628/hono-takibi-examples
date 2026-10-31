import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/path_no_response.yaml',
  output: './src/3-1-path-no-response/routes.ts',
  docs: {
    output: './src/3-1-path-no-response/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
