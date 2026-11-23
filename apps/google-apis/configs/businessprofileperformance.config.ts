import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/businessprofileperformance/v1/openapi.yaml',
  output: './src/businessprofileperformance/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/businessprofileperformance/types.ts' },
  client: { output: './src/businessprofileperformance/client.ts', baseUrl: '/' },
  rpc: { output: './src/businessprofileperformance/rpc.ts', parseResponse: true },
  swr: { output: './src/businessprofileperformance/hooks/swr.ts' },
  'tanstack-query': { output: './src/businessprofileperformance/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/businessprofileperformance/hooks/preact-query.ts' },
  'solid-query': { output: './src/businessprofileperformance/hooks/solid-query.ts' },
  'vue-query': { output: './src/businessprofileperformance/hooks/vue-query.ts' },
  'svelte-query': { output: './src/businessprofileperformance/hooks/svelte-query.ts' },
  'angular-query': { output: './src/businessprofileperformance/hooks/angular-query.ts' },
  docs: {
    output: './src/businessprofileperformance/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
