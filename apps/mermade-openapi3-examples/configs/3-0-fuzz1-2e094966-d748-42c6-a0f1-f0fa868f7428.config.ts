import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/2e094966-d748-42c6-a0f1-f0fa868f7428.yaml',
  output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/routes.ts',
  docs: {
    output: './src/3-0-fuzz1-2e094966-d748-42c6-a0f1-f0fa868f7428/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
