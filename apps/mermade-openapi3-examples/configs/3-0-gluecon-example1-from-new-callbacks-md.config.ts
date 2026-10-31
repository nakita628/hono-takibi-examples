import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/gluecon/example1_from_._New_callbacks.md.yaml',
  output: './src/3-0-gluecon-example1-from-new-callbacks-md/routes.ts',
  docs: {
    output: './src/3-0-gluecon-example1-from-new-callbacks-md/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
