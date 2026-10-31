import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/microsoft/CCF/main/doc/schemas/gov_openapi.json',
  output: './src/gov/routes.ts',
  docs: {
    output: './src/gov/api.md',
    curl: true,
    baseUrl: 'https://localhost:8000',
  },
})
