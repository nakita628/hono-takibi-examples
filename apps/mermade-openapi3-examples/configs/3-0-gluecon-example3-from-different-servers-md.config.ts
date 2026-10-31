import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/gluecon/example3_from_._Different_servers.md.yaml',
  output: './src/3-0-gluecon-example3-from-different-servers-md/routes.ts',
  docs: {
    output: './src/3-0-gluecon-example3-from-different-servers-md/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
