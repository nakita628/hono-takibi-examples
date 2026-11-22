import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mist.com/0.36.1/openapi.yaml',
  output: './src/mist/routes.ts',
  template: {},
  type: { output: './src/mist/types.ts' },
  client: { output: './src/mist/client.ts', baseUrl: '/' },
  rpc: { output: './src/mist/rpc.ts', parseResponse: true },
  swr: { output: './src/mist/hooks/swr.ts' },
  'tanstack-query': { output: './src/mist/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mist/hooks/preact-query.ts' },
  'solid-query': { output: './src/mist/hooks/solid-query.ts' },
  'vue-query': { output: './src/mist/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mist/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mist/hooks/angular-query.ts' },
  docs: {
    output: './src/mist/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
