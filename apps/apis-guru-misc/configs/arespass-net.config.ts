import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/arespass.net/1.0/openapi.yaml',
  output: './src/arespass-net/routes.ts',
  template: {},
  type: { output: './src/arespass-net/types.ts' },
  client: { output: './src/arespass-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/arespass-net/rpc.ts', parseResponse: true },
  swr: { output: './src/arespass-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/arespass-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/arespass-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/arespass-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/arespass-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/arespass-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/arespass-net/hooks/angular-query.ts' },
  docs: {
    output: './src/arespass-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
