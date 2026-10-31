import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/application/1.0.2/openapi.yaml',
  output: './src/application/routes.ts',
  docs: {
    output: './src/application/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
