import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/OAI/uber.yaml',
  output: './src/3-0-oai-uber/routes.ts',
  docs: {
    output: './src/3-0-oai-uber/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
