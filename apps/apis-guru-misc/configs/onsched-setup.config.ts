import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/onsched.com/setup/v1/openapi.yaml',
  output: './src/onsched-setup/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/onsched-setup/types.ts' },
  client: { output: './src/onsched-setup/client.ts', baseUrl: '/' },
  rpc: { output: './src/onsched-setup/rpc.ts', parseResponse: true },
  swr: { output: './src/onsched-setup/hooks/swr.ts' },
  'tanstack-query': { output: './src/onsched-setup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/onsched-setup/hooks/preact-query.ts' },
  'solid-query': { output: './src/onsched-setup/hooks/solid-query.ts' },
  'vue-query': { output: './src/onsched-setup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/onsched-setup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/onsched-setup/hooks/angular-query.ts' },
  docs: {
    output: './src/onsched-setup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
