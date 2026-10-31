import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/3a3cacd9-34f1-44e7-a9a7-ffe24888a624.yaml',
  output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/routes.ts',
  docs: {
    output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
