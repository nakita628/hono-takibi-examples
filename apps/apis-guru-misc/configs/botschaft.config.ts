import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/botschaft.local/0.1.0/openapi.yaml',
  output: './src/botschaft/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/botschaft/types.ts' },
  client: { output: './src/botschaft/client.ts', baseUrl: '/' },
  rpc: { output: './src/botschaft/rpc.ts', parseResponse: true },
  swr: { output: './src/botschaft/hooks/swr.ts' },
  'tanstack-query': { output: './src/botschaft/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/botschaft/hooks/preact-query.ts' },
  'solid-query': { output: './src/botschaft/hooks/solid-query.ts' },
  'vue-query': { output: './src/botschaft/hooks/vue-query.ts' },
  'svelte-query': { output: './src/botschaft/hooks/svelte-query.ts' },
  'angular-query': { output: './src/botschaft/hooks/angular-query.ts' },
  docs: {
    output: './src/botschaft/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
