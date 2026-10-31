import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mailscript.com/0.4.0/openapi.yaml',
  output: './src/mailscript/routes.ts',
  docs: {
    output: './src/mailscript/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
