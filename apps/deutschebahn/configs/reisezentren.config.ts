import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/deutschebahn.com/reisezentren/v1/openapi.yaml',
  output: './src/reisezentren/routes.ts',
  template: {},
  type: { output: './src/reisezentren/types.ts' },
  client: { output: './src/reisezentren/client.ts', baseUrl: '/' },
  rpc: { output: './src/reisezentren/rpc.ts', parseResponse: true },
  swr: { output: './src/reisezentren/hooks/swr.ts' },
  'tanstack-query': { output: './src/reisezentren/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/reisezentren/hooks/preact-query.ts' },
  'solid-query': { output: './src/reisezentren/hooks/solid-query.ts' },
  'vue-query': { output: './src/reisezentren/hooks/vue-query.ts' },
  'svelte-query': { output: './src/reisezentren/hooks/svelte-query.ts' },
  'angular-query': { output: './src/reisezentren/hooks/angular-query.ts' },
  docs: {
    output: './src/reisezentren/api.md',
    curl: true,
    baseUrl: 'https://apis.deutschebahn.com',
  },
})
