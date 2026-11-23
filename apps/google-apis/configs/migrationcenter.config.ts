import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/migrationcenter/v1alpha1/openapi.yaml',
  output: './src/migrationcenter/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/migrationcenter/types.ts' },
  client: { output: './src/migrationcenter/client.ts', baseUrl: '/' },
  rpc: { output: './src/migrationcenter/rpc.ts', parseResponse: true },
  swr: { output: './src/migrationcenter/hooks/swr.ts' },
  'tanstack-query': { output: './src/migrationcenter/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/migrationcenter/hooks/preact-query.ts' },
  'solid-query': { output: './src/migrationcenter/hooks/solid-query.ts' },
  'vue-query': { output: './src/migrationcenter/hooks/vue-query.ts' },
  'svelte-query': { output: './src/migrationcenter/hooks/svelte-query.ts' },
  'angular-query': { output: './src/migrationcenter/hooks/angular-query.ts' },
  docs: {
    output: './src/migrationcenter/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
