import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vectara.io/1.0.0/openapi.yaml',
  output: './src/vectara-io/routes.ts',
  template: {},
  type: { output: './src/vectara-io/types.ts' },
  client: { output: './src/vectara-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/vectara-io/rpc.ts', parseResponse: true },
  swr: { output: './src/vectara-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/vectara-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vectara-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/vectara-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/vectara-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vectara-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vectara-io/hooks/angular-query.ts' },
  docs: {
    output: './src/vectara-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
