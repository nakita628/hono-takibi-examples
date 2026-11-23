import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shipengine.com/1.1.202303022103/openapi.yaml',
  output: './src/shipengine/routes.ts',
  template: {},
  type: { output: './src/shipengine/types.ts' },
  client: { output: './src/shipengine/client.ts', baseUrl: '/' },
  rpc: { output: './src/shipengine/rpc.ts', parseResponse: true },
  swr: { output: './src/shipengine/hooks/swr.ts' },
  'tanstack-query': { output: './src/shipengine/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/shipengine/hooks/preact-query.ts' },
  'solid-query': { output: './src/shipengine/hooks/solid-query.ts' },
  'vue-query': { output: './src/shipengine/hooks/vue-query.ts' },
  'svelte-query': { output: './src/shipengine/hooks/svelte-query.ts' },
  'angular-query': { output: './src/shipengine/hooks/angular-query.ts' },
  docs: {
    output: './src/shipengine/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
