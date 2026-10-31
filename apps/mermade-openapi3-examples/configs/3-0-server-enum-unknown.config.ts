import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/server_enum_unknown.yaml',
  output: './src/3-0-server-enum-unknown/routes.ts',
  docs: {
    output: './src/3-0-server-enum-unknown/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
