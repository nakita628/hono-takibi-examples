import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.brevo.com/v3/swagger_definition_v3.yml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.brevo.com/v3',
  },
})
