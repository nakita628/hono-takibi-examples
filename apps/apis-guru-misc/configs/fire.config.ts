import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fire.com/1.0/openapi.yaml',
  output: './src/fire/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/fire/types.ts' },
  client: { output: './src/fire/client.ts', baseUrl: '/' },
  rpc: { output: './src/fire/rpc.ts', parseResponse: true },
  swr: { output: './src/fire/hooks/swr.ts' },
  'tanstack-query': { output: './src/fire/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fire/hooks/preact-query.ts' },
  'solid-query': { output: './src/fire/hooks/solid-query.ts' },
  'vue-query': { output: './src/fire/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fire/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fire/hooks/angular-query.ts' },
  docs: {
    output: './src/fire/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
