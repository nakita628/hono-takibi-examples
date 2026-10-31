import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/audit/1.0.4/openapi.yaml',
  output: './src/audit/routes.ts',
  docs: {
    output: './src/audit/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
