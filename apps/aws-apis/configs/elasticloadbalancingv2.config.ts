import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/elasticloadbalancingv2/2015-12-01/openapi.yaml',
  output: './src/elasticloadbalancingv2/routes.ts',
  docs: {
    output: './src/elasticloadbalancingv2/api.md',
    curl: true,
    baseUrl: 'https://elasticloadbalancingv2.us-east-1.amazonaws.com',
  },
})
