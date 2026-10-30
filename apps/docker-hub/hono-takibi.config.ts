import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://docs.docker.com/reference/api/hub/latest.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://hub.docker.com',
  },
})
