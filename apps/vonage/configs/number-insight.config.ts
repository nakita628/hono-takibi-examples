import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/number-insight/1.2.1/openapi.yaml',
  output: './src/number-insight/routes.ts',
  docs: {
    output: './src/number-insight/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
