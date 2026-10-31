import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/gluecon/example1_from_._Fixed_file.md.yaml',
  output: './src/3-0-gluecon-example1-from-fixed-file-md/routes.ts',
  docs: {
    output: './src/3-0-gluecon-example1-from-fixed-file-md/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
