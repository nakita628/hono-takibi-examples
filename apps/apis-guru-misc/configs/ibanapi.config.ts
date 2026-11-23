import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ibanapi.com/1.0.0/openapi.yaml',
  output: './src/ibanapi/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ibanapi/types.ts' },
  client: { output: './src/ibanapi/client.ts', baseUrl: '/' },
  rpc: { output: './src/ibanapi/rpc.ts', parseResponse: true },
  swr: { output: './src/ibanapi/hooks/swr.ts' },
  'tanstack-query': { output: './src/ibanapi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ibanapi/hooks/preact-query.ts' },
  'solid-query': { output: './src/ibanapi/hooks/solid-query.ts' },
  'vue-query': { output: './src/ibanapi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ibanapi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ibanapi/hooks/angular-query.ts' },
  docs: {
    output: './src/ibanapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
