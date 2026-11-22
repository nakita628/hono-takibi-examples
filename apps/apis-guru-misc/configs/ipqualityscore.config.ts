import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ipqualityscore.com/1.0.0/openapi.yaml',
  output: './src/ipqualityscore/routes.ts',
  template: {},
  type: { output: './src/ipqualityscore/types.ts' },
  client: { output: './src/ipqualityscore/client.ts', baseUrl: '/' },
  rpc: { output: './src/ipqualityscore/rpc.ts', parseResponse: true },
  swr: { output: './src/ipqualityscore/hooks/swr.ts' },
  'tanstack-query': { output: './src/ipqualityscore/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ipqualityscore/hooks/preact-query.ts' },
  'solid-query': { output: './src/ipqualityscore/hooks/solid-query.ts' },
  'vue-query': { output: './src/ipqualityscore/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ipqualityscore/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ipqualityscore/hooks/angular-query.ts' },
  docs: {
    output: './src/ipqualityscore/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
