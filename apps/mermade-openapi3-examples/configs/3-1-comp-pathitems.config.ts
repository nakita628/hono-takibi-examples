import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/comp_pathitems.yaml',
  output: './src/3-1-comp-pathitems/routes.ts',
  docs: {
    output: './src/3-1-comp-pathitems/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
