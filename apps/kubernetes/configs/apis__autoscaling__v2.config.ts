import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/kubernetes/kubernetes/master/api/openapi-spec/v3/apis__autoscaling__v2_openapi.json',
  output: './src/apis__autoscaling__v2/routes.ts',
  docs: {
    output: './src/apis__autoscaling__v2/api.md',
    curl: true,
    baseUrl: 'https://kubernetes.default.svc',
  },
})
