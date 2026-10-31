import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/account/1.0.4/openapi.yaml',
  output: './src/account/routes.ts',
  docs: {
    output: './src/account/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
