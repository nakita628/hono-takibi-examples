import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/redact/1.0.6/openapi.yaml',
  output: './src/redact/routes.ts',
  docs: {
    output: './src/redact/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
