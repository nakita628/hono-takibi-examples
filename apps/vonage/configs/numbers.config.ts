import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/numbers/1.0.20/openapi.yaml',
  output: './src/numbers/routes.ts',
  docs: {
    output: './src/numbers/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
