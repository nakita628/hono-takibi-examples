import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/dispatch/0.3.4/openapi.yaml',
  output: './src/dispatch/routes.ts',
  docs: {
    output: './src/dispatch/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
