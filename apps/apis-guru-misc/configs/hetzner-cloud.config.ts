import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/hetzner.cloud/1.0.0/openapi.yaml',
  output: './src/hetzner-cloud/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/hetzner-cloud/types.ts' },
  client: { output: './src/hetzner-cloud/client.ts', baseUrl: '/' },
  rpc: { output: './src/hetzner-cloud/rpc.ts', parseResponse: true },
  swr: { output: './src/hetzner-cloud/hooks/swr.ts' },
  'tanstack-query': { output: './src/hetzner-cloud/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hetzner-cloud/hooks/preact-query.ts' },
  'solid-query': { output: './src/hetzner-cloud/hooks/solid-query.ts' },
  'vue-query': { output: './src/hetzner-cloud/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hetzner-cloud/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hetzner-cloud/hooks/angular-query.ts' },
  docs: {
    output: './src/hetzner-cloud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
