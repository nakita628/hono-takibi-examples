import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/globalwinescore.com/8234aab51481d37a30757d925b7f4221a659427e/openapi.yaml',
  output: './src/globalwinescore/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/globalwinescore/types.ts' },
  client: { output: './src/globalwinescore/client.ts', baseUrl: '/' },
  rpc: { output: './src/globalwinescore/rpc.ts', parseResponse: true },
  swr: { output: './src/globalwinescore/hooks/swr.ts' },
  'tanstack-query': { output: './src/globalwinescore/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/globalwinescore/hooks/preact-query.ts' },
  'solid-query': { output: './src/globalwinescore/hooks/solid-query.ts' },
  'vue-query': { output: './src/globalwinescore/hooks/vue-query.ts' },
  'svelte-query': { output: './src/globalwinescore/hooks/svelte-query.ts' },
  'angular-query': { output: './src/globalwinescore/hooks/angular-query.ts' },
  docs: {
    output: './src/globalwinescore/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
