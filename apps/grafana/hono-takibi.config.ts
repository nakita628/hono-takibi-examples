import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Grafana HTTP API (grafana/grafana)
  input: 'https://raw.githubusercontent.com/grafana/grafana/main/public/openapi3.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://grafana.example.com',
  },
})
