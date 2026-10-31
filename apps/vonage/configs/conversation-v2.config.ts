import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/conversation.v2/1.0.1/openapi.yaml',
  output: './src/conversation-v2/routes.ts',
  docs: {
    output: './src/conversation-v2/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
