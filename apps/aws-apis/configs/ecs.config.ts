import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/ecs/2014-11-13/openapi.yaml',
  output: './src/ecs/routes.ts',
  docs: {
    output: './src/ecs/api.md',
    curl: true,
    baseUrl: 'https://ecs.us-east-1.amazonaws.com',
  },
})
