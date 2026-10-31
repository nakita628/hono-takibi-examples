import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/firstinspires.org/1.0.0/openapi.yaml',
  output: './src/firstinspires-org/routes.ts',
  docs: {
    output: './src/firstinspires-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
