import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/alertcenter/v1beta1/openapi.yaml',
  output: './src/alertcenter/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/alertcenter/types.ts' },
  client: { output: './src/alertcenter/client.ts', baseUrl: '/' },
  rpc: { output: './src/alertcenter/rpc.ts', parseResponse: true },
  swr: { output: './src/alertcenter/hooks/swr.ts' },
  'tanstack-query': { output: './src/alertcenter/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/alertcenter/hooks/preact-query.ts' },
  'solid-query': { output: './src/alertcenter/hooks/solid-query.ts' },
  'vue-query': { output: './src/alertcenter/hooks/vue-query.ts' },
  'svelte-query': { output: './src/alertcenter/hooks/svelte-query.ts' },
  'angular-query': { output: './src/alertcenter/hooks/angular-query.ts' },
  docs: {
    output: './src/alertcenter/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
