import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/subaccounts/1.0.8/openapi.yaml',
  output: './src/subaccounts/routes.ts',
  docs: {
    output: './src/subaccounts/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
