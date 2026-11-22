import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/onsched.com/consumer/v1/openapi.yaml',
  output: './src/onsched-consumer/routes.ts',
  template: {},
  type: { output: './src/onsched-consumer/types.ts' },
  client: { output: './src/onsched-consumer/client.ts', baseUrl: '/' },
  rpc: { output: './src/onsched-consumer/rpc.ts', parseResponse: true },
  swr: { output: './src/onsched-consumer/hooks/swr.ts' },
  'tanstack-query': { output: './src/onsched-consumer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/onsched-consumer/hooks/preact-query.ts' },
  'solid-query': { output: './src/onsched-consumer/hooks/solid-query.ts' },
  'vue-query': { output: './src/onsched-consumer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/onsched-consumer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/onsched-consumer/hooks/angular-query.ts' },
  docs: {
    output: './src/onsched-consumer/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
