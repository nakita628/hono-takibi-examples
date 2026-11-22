import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/lead/9.3.0/openapi.yaml',
  output: './src/lead/routes.ts',
  template: {},
  type: { output: './src/lead/types.ts' },
  client: { output: './src/lead/client.ts', baseUrl: '/' },
  rpc: { output: './src/lead/rpc.ts', parseResponse: true },
  swr: { output: './src/lead/hooks/swr.ts' },
  'tanstack-query': { output: './src/lead/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lead/hooks/preact-query.ts' },
  'solid-query': { output: './src/lead/hooks/solid-query.ts' },
  'vue-query': { output: './src/lead/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lead/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lead/hooks/angular-query.ts' },
  docs: {
    output: './src/lead/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
