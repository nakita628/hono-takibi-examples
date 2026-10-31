import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/media/1.0.2/openapi.yaml',
  output: './src/media/routes.ts',
  docs: {
    output: './src/media/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
