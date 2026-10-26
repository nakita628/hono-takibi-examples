import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/SessionAuthenticationService-v1.json',
  output: './src/SessionAuthenticationService-v1/routes.ts',
  docs: {
    output: './src/SessionAuthenticationService-v1/api.md',
    curl: true,
    baseUrl: 'https://test.adyen.com/authe/api/v1',
  },
})
