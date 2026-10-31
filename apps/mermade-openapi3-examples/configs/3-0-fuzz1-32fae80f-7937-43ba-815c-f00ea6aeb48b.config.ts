import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/32fae80f-7937-43ba-815c-f00ea6aeb48b.yaml',
  output: './src/3-0-fuzz1-32fae80f-7937-43ba-815c-f00ea6aeb48b/routes.ts',
  docs: {
    output: './src/3-0-fuzz1-32fae80f-7937-43ba-815c-f00ea6aeb48b/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
