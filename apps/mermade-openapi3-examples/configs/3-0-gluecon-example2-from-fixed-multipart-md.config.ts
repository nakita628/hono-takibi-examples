import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/gluecon/example2_from_._Fixed_multipart.md.yaml',
  output: './src/3-0-gluecon-example2-from-fixed-multipart-md/routes.ts',
  docs: {
    output: './src/3-0-gluecon-example2-from-fixed-multipart-md/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
