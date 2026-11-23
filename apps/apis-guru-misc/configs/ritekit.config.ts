import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ritekit.com/1.0.0/openapi.yaml',
  output: './src/ritekit/routes.ts',
  template: {},
  type: { output: './src/ritekit/types.ts' },
  client: { output: './src/ritekit/client.ts', baseUrl: '/' },
  rpc: { output: './src/ritekit/rpc.ts', parseResponse: true },
  swr: { output: './src/ritekit/hooks/swr.ts' },
  'tanstack-query': { output: './src/ritekit/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ritekit/hooks/preact-query.ts' },
  'solid-query': { output: './src/ritekit/hooks/solid-query.ts' },
  'vue-query': { output: './src/ritekit/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ritekit/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ritekit/hooks/angular-query.ts' },
  docs: {
    output: './src/ritekit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
