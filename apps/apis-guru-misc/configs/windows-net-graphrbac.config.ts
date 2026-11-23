import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/windows.net/graphrbac/1.6/openapi.yaml',
  output: './src/windows-net-graphrbac/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/windows-net-graphrbac/types.ts' },
  client: { output: './src/windows-net-graphrbac/client.ts', baseUrl: '/' },
  rpc: { output: './src/windows-net-graphrbac/rpc.ts', parseResponse: true },
  swr: { output: './src/windows-net-graphrbac/hooks/swr.ts' },
  'tanstack-query': { output: './src/windows-net-graphrbac/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/windows-net-graphrbac/hooks/preact-query.ts' },
  'solid-query': { output: './src/windows-net-graphrbac/hooks/solid-query.ts' },
  'vue-query': { output: './src/windows-net-graphrbac/hooks/vue-query.ts' },
  'svelte-query': { output: './src/windows-net-graphrbac/hooks/svelte-query.ts' },
  'angular-query': { output: './src/windows-net-graphrbac/hooks/angular-query.ts' },
  docs: {
    output: './src/windows-net-graphrbac/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
