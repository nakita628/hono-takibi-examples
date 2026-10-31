import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/voice/1.3.10/openapi.yaml',
  output: './src/voice/routes.ts',
  docs: {
    output: './src/voice/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
