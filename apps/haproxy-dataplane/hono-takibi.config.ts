import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // HAProxy Data Plane API, official OpenAPI spec:
  // https://github.com/haproxytech/dataplaneapi/blob/fe910781c2cb270ec6a9c9f1fb5d1675d36d042d/specification/build/dataplane_spec.yaml
  input:
    'https://raw.githubusercontent.com/haproxytech/dataplaneapi/master/specification/build/dataplane_spec.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://127.0.0.1:5555/v3',
  },
})
