import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/microsoft/CCF/main/doc/schemas/node_openapi.json',
  output: './src/node/routes.ts',
  docs: {
    output: './src/node/api.md',
    curl: true,
    baseUrl: 'https://localhost:8000',
  },
})
