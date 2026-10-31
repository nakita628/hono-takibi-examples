import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/mega.yaml',
  output: './src/3-1-mega/routes.ts',
  docs: {
    output: './src/3-1-mega/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
