import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/reloadly.com/1.0.0/openapi.yaml',
  output: './src/reloadly/routes.ts',
  template: {},
  type: { output: './src/reloadly/types.ts' },
  client: { output: './src/reloadly/client.ts', baseUrl: '/' },
  rpc: { output: './src/reloadly/rpc.ts', parseResponse: true },
  swr: { output: './src/reloadly/hooks/swr.ts' },
  'tanstack-query': { output: './src/reloadly/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/reloadly/hooks/preact-query.ts' },
  'solid-query': { output: './src/reloadly/hooks/solid-query.ts' },
  'vue-query': { output: './src/reloadly/hooks/vue-query.ts' },
  'svelte-query': { output: './src/reloadly/hooks/svelte-query.ts' },
  'angular-query': { output: './src/reloadly/hooks/angular-query.ts' },
  docs: {
    output: './src/reloadly/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
