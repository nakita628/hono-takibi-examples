import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/8331d5cd-c1fb-4c8c-b3e4-638c10fa4d80.yaml',
  output: './src/3-0-fuzz1-8331d5cd-c1fb-4c8c-b3e4-638c10fa4d80/routes.ts',
  docs: {
    output: './src/3-0-fuzz1-8331d5cd-c1fb-4c8c-b3e4-638c10fa4d80/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
