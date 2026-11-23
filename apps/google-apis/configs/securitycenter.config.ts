import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/securitycenter/v1beta2/openapi.yaml',
  output: './src/securitycenter/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/securitycenter/types.ts' },
  client: { output: './src/securitycenter/client.ts', baseUrl: '/' },
  rpc: { output: './src/securitycenter/rpc.ts', parseResponse: true },
  swr: { output: './src/securitycenter/hooks/swr.ts' },
  'tanstack-query': { output: './src/securitycenter/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/securitycenter/hooks/preact-query.ts' },
  'solid-query': { output: './src/securitycenter/hooks/solid-query.ts' },
  'vue-query': { output: './src/securitycenter/hooks/vue-query.ts' },
  'svelte-query': { output: './src/securitycenter/hooks/svelte-query.ts' },
  'angular-query': { output: './src/securitycenter/hooks/angular-query.ts' },
  docs: {
    output: './src/securitycenter/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
