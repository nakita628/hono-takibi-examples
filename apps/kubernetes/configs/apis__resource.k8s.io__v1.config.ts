import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/kubernetes/kubernetes/master/api/openapi-spec/v3/apis__resource.k8s.io__v1_openapi.json',
  output: './src/apis__resource.k8s.io__v1/routes.ts',
  docs: {
    output: './src/apis__resource.k8s.io__v1/api.md',
    curl: true,
    baseUrl: 'https://kubernetes.default.svc',
  },
})
