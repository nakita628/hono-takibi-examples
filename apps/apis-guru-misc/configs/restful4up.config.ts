import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/restful4up.local/1.0.0/openapi.yaml',
  output: './src/restful4up/routes.ts',
  template: {},
  type: { output: './src/restful4up/types.ts' },
  client: { output: './src/restful4up/client.ts', baseUrl: '/' },
  rpc: { output: './src/restful4up/rpc.ts', parseResponse: true },
  swr: { output: './src/restful4up/hooks/swr.ts' },
  'tanstack-query': { output: './src/restful4up/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/restful4up/hooks/preact-query.ts' },
  'solid-query': { output: './src/restful4up/hooks/solid-query.ts' },
  'vue-query': { output: './src/restful4up/hooks/vue-query.ts' },
  'svelte-query': { output: './src/restful4up/hooks/svelte-query.ts' },
  'angular-query': { output: './src/restful4up/hooks/angular-query.ts' },
  docs: {
    output: './src/restful4up/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
