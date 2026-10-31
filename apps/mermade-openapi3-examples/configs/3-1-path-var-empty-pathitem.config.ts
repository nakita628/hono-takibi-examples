import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/path_var_empty_pathitem.yaml',
  output: './src/3-1-path-var-empty-pathitem/routes.ts',
  docs: {
    output: './src/3-1-path-var-empty-pathitem/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
