import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/OAI/link-example.yaml',
  output: './src/3-0-oai-link-example/routes.ts',
  docs: {
    output: './src/3-0-oai-link-example/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
