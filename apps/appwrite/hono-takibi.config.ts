import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/appwrite/appwrite/1.7.x/app/config/specs/open-api3-latest-server.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://cloud.appwrite.io/v1',
  },
})
