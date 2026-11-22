import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/iptwist.com/1.0.0/openapi.yaml',
  output: './src/iptwist/routes.ts',
  template: {},
  type: { output: './src/iptwist/types.ts' },
  client: { output: './src/iptwist/client.ts', baseUrl: '/' },
  rpc: { output: './src/iptwist/rpc.ts', parseResponse: true },
  swr: { output: './src/iptwist/hooks/swr.ts' },
  'tanstack-query': { output: './src/iptwist/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iptwist/hooks/preact-query.ts' },
  'solid-query': { output: './src/iptwist/hooks/solid-query.ts' },
  'vue-query': { output: './src/iptwist/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iptwist/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iptwist/hooks/angular-query.ts' },
  docs: {
    output: './src/iptwist/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
