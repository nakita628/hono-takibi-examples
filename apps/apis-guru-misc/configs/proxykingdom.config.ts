import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/proxykingdom.com/v1/openapi.yaml',
  output: './src/proxykingdom/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/proxykingdom/types.ts' },
  client: { output: './src/proxykingdom/client.ts', baseUrl: '/' },
  rpc: { output: './src/proxykingdom/rpc.ts', parseResponse: true },
  swr: { output: './src/proxykingdom/hooks/swr.ts' },
  'tanstack-query': { output: './src/proxykingdom/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/proxykingdom/hooks/preact-query.ts' },
  'solid-query': { output: './src/proxykingdom/hooks/solid-query.ts' },
  'vue-query': { output: './src/proxykingdom/hooks/vue-query.ts' },
  'svelte-query': { output: './src/proxykingdom/hooks/svelte-query.ts' },
  'angular-query': { output: './src/proxykingdom/hooks/angular-query.ts' },
  docs: {
    output: './src/proxykingdom/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
