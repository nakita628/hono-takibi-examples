import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bclaws.ca/bclaws/1.0.0/openapi.yaml',
  output: './src/bclaws-ca-bclaws/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bclaws-ca-bclaws/types.ts' },
  client: { output: './src/bclaws-ca-bclaws/client.ts', baseUrl: '/' },
  rpc: { output: './src/bclaws-ca-bclaws/rpc.ts', parseResponse: true },
  swr: { output: './src/bclaws-ca-bclaws/hooks/swr.ts' },
  'tanstack-query': { output: './src/bclaws-ca-bclaws/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bclaws-ca-bclaws/hooks/preact-query.ts' },
  'solid-query': { output: './src/bclaws-ca-bclaws/hooks/solid-query.ts' },
  'vue-query': { output: './src/bclaws-ca-bclaws/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bclaws-ca-bclaws/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bclaws-ca-bclaws/hooks/angular-query.ts' },
  docs: {
    output: './src/bclaws-ca-bclaws/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
