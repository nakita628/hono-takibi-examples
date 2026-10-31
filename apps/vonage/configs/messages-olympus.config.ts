import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/messages-olympus/1.4.0/openapi.yaml',
  output: './src/messages-olympus/routes.ts',
  docs: {
    output: './src/messages-olympus/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
