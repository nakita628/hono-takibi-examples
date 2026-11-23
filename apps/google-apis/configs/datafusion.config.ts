import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datafusion/v1beta1/openapi.yaml',
  output: './src/datafusion/routes.ts',
  template: {},
  type: { output: './src/datafusion/types.ts' },
  client: { output: './src/datafusion/client.ts', baseUrl: '/' },
  rpc: { output: './src/datafusion/rpc.ts', parseResponse: true },
  swr: { output: './src/datafusion/hooks/swr.ts' },
  'tanstack-query': { output: './src/datafusion/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datafusion/hooks/preact-query.ts' },
  'solid-query': { output: './src/datafusion/hooks/solid-query.ts' },
  'vue-query': { output: './src/datafusion/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datafusion/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datafusion/hooks/angular-query.ts' },
  docs: {
    output: './src/datafusion/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
