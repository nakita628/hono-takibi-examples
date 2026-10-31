import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/verify/1.2.4/openapi.yaml',
  output: './src/verify/routes.ts',
  docs: {
    output: './src/verify/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
