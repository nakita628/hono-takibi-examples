import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/microsoft/CCF/main/doc/schemas/app_openapi.json',
  output: './src/app/routes.ts',
  docs: {
    output: './src/app/api.md',
    curl: true,
    baseUrl: 'https://localhost:8000',
  },
})
