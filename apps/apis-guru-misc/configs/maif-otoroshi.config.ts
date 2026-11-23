import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/maif.local/otoroshi/1.5.0-dev/openapi.yaml',
  output: './src/maif-otoroshi/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/maif-otoroshi/types.ts' },
  client: { output: './src/maif-otoroshi/client.ts', baseUrl: '/' },
  rpc: { output: './src/maif-otoroshi/rpc.ts', parseResponse: true },
  swr: { output: './src/maif-otoroshi/hooks/swr.ts' },
  'tanstack-query': { output: './src/maif-otoroshi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/maif-otoroshi/hooks/preact-query.ts' },
  'solid-query': { output: './src/maif-otoroshi/hooks/solid-query.ts' },
  'vue-query': { output: './src/maif-otoroshi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/maif-otoroshi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/maif-otoroshi/hooks/angular-query.ts' },
  docs: {
    output: './src/maif-otoroshi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
