import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/23827c62-76c5-4bf0-b756-7a038ddf718a.yaml',
  output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/routes.ts',
  docs: {
    output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
