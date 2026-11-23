import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/netbox.dev/3.4/openapi.yaml',
  output: './src/netbox-dev/routes.ts',
  template: {},
  type: { output: './src/netbox-dev/types.ts' },
  client: { output: './src/netbox-dev/client.ts', baseUrl: '/' },
  rpc: { output: './src/netbox-dev/rpc.ts', parseResponse: true },
  swr: { output: './src/netbox-dev/hooks/swr.ts' },
  'tanstack-query': { output: './src/netbox-dev/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/netbox-dev/hooks/preact-query.ts' },
  'solid-query': { output: './src/netbox-dev/hooks/solid-query.ts' },
  'vue-query': { output: './src/netbox-dev/hooks/vue-query.ts' },
  'svelte-query': { output: './src/netbox-dev/hooks/svelte-query.ts' },
  'angular-query': { output: './src/netbox-dev/hooks/angular-query.ts' },
  docs: {
    output: './src/netbox-dev/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
