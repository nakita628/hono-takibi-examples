import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/traccar.org/5.6/openapi.yaml',
  output: './src/traccar-org/routes.ts',
  template: {},
  type: { output: './src/traccar-org/types.ts' },
  client: { output: './src/traccar-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/traccar-org/rpc.ts', parseResponse: true },
  swr: { output: './src/traccar-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/traccar-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/traccar-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/traccar-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/traccar-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/traccar-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/traccar-org/hooks/angular-query.ts' },
  docs: {
    output: './src/traccar-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
