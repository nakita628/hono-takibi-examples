import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/external-accounts/0.1.5/openapi.yaml',
  output: './src/external-accounts/routes.ts',
  docs: {
    output: './src/external-accounts/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
