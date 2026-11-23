import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // HAProxy Data Plane API, official OpenAPI spec:
  // https://github.com/haproxytech/dataplaneapi/blob/fe910781c2cb270ec6a9c9f1fb5d1675d36d042d/specification/build/dataplane_spec.yaml
  input:
    'https://raw.githubusercontent.com/haproxytech/dataplaneapi/master/specification/build/dataplane_spec.yaml',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://127.0.0.1:5555/v3',
  },
})
