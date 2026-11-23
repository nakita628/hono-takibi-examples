import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/workstations/v1beta/openapi.yaml',
  output: './src/workstations/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/workstations/types.ts' },
  client: { output: './src/workstations/client.ts', baseUrl: '/' },
  rpc: { output: './src/workstations/rpc.ts', parseResponse: true },
  swr: { output: './src/workstations/hooks/swr.ts' },
  'tanstack-query': { output: './src/workstations/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/workstations/hooks/preact-query.ts' },
  'solid-query': { output: './src/workstations/hooks/solid-query.ts' },
  'vue-query': { output: './src/workstations/hooks/vue-query.ts' },
  'svelte-query': { output: './src/workstations/hooks/svelte-query.ts' },
  'angular-query': { output: './src/workstations/hooks/angular-query.ts' },
  docs: {
    output: './src/workstations/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
