import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/kumpeapps.com/5.0.0/openapi.yaml',
  output: './src/kumpeapps/routes.ts',
  template: {},
  type: { output: './src/kumpeapps/types.ts' },
  client: { output: './src/kumpeapps/client.ts', baseUrl: '/' },
  rpc: { output: './src/kumpeapps/rpc.ts', parseResponse: true },
  swr: { output: './src/kumpeapps/hooks/swr.ts' },
  'tanstack-query': { output: './src/kumpeapps/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kumpeapps/hooks/preact-query.ts' },
  'solid-query': { output: './src/kumpeapps/hooks/solid-query.ts' },
  'vue-query': { output: './src/kumpeapps/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kumpeapps/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kumpeapps/hooks/angular-query.ts' },
  docs: {
    output: './src/kumpeapps/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
