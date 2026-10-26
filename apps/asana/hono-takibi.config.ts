import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Asana/openapi
  input: 'https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://app.asana.com/api/1.0',
  },
})
