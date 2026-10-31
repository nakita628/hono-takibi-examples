import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/application.v2/2.1.4/openapi.yaml',
  output: './src/application-v2/routes.ts',
  docs: {
    output: './src/application-v2/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
