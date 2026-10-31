import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elasticloadbalancing/2012-06-01/openapi.yaml',
  output: './src/elasticloadbalancing/routes.ts',
  docs: {
    output: './src/elasticloadbalancing/api.md',
    curl: true,
    baseUrl: 'https://elasticloadbalancing.us-east-1.amazonaws.com',
  },
})
