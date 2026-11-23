import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/sts/v1beta/openapi.yaml',
  output: './src/sts/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sts/types.ts' },
  client: { output: './src/sts/client.ts', baseUrl: '/' },
  rpc: { output: './src/sts/rpc.ts', parseResponse: true },
  swr: { output: './src/sts/hooks/swr.ts' },
  'tanstack-query': { output: './src/sts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sts/hooks/preact-query.ts' },
  'solid-query': { output: './src/sts/hooks/solid-query.ts' },
  'vue-query': { output: './src/sts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sts/hooks/angular-query.ts' },
  docs: {
    output: './src/sts/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
