import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/alertersystem.com/1.6.0/openapi.yaml',
  output: './src/alertersystem/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/alertersystem/types.ts' },
  client: { output: './src/alertersystem/client.ts', baseUrl: '/' },
  rpc: { output: './src/alertersystem/rpc.ts', parseResponse: true },
  swr: { output: './src/alertersystem/hooks/swr.ts' },
  'tanstack-query': { output: './src/alertersystem/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/alertersystem/hooks/preact-query.ts' },
  'solid-query': { output: './src/alertersystem/hooks/solid-query.ts' },
  'vue-query': { output: './src/alertersystem/hooks/vue-query.ts' },
  'svelte-query': { output: './src/alertersystem/hooks/svelte-query.ts' },
  'angular-query': { output: './src/alertersystem/hooks/angular-query.ts' },
  docs: {
    output: './src/alertersystem/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
