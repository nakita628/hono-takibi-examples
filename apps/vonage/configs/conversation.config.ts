import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/conversation/2.0.1/openapi.yaml',
  output: './src/conversation/routes.ts',
  docs: {
    output: './src/conversation/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
