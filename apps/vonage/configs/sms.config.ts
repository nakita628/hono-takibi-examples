import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/sms/1.2.0/openapi.yaml',
  output: './src/sms/routes.ts',
  docs: {
    output: './src/sms/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
