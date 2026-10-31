import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/minimal_paths.yaml',
  output: './src/3-1-minimal-paths/routes.ts',
  docs: {
    output: './src/3-1-minimal-paths/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
