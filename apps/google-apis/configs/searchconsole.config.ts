import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/searchconsole/v1/openapi.yaml',
  output: './src/searchconsole/routes.ts',
  docs: {
    output: './src/searchconsole/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
