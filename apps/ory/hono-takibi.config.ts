import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // ory/kratos
  input: 'https://raw.githubusercontent.com/ory/kratos/master/spec/api.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
