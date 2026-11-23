import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getstateabbreviation/1.0.0/openapi.yaml',
  output: './src/getstateabbreviation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/getstateabbreviation/types.ts' },
  client: { output: './src/getstateabbreviation/client.ts', baseUrl: '/' },
  rpc: { output: './src/getstateabbreviation/rpc.ts', parseResponse: true },
  swr: { output: './src/getstateabbreviation/hooks/swr.ts' },
  'tanstack-query': { output: './src/getstateabbreviation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getstateabbreviation/hooks/preact-query.ts' },
  'solid-query': { output: './src/getstateabbreviation/hooks/solid-query.ts' },
  'vue-query': { output: './src/getstateabbreviation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getstateabbreviation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getstateabbreviation/hooks/angular-query.ts' },
  docs: {
    output: './src/getstateabbreviation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
