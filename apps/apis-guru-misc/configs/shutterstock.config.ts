import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shutterstock.com/1.1.32/openapi.yaml',
  output: './src/shutterstock/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/shutterstock/types.ts' },
  client: { output: './src/shutterstock/client.ts', baseUrl: '/' },
  rpc: { output: './src/shutterstock/rpc.ts', parseResponse: true },
  swr: { output: './src/shutterstock/hooks/swr.ts' },
  'tanstack-query': { output: './src/shutterstock/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/shutterstock/hooks/preact-query.ts' },
  'solid-query': { output: './src/shutterstock/hooks/solid-query.ts' },
  'vue-query': { output: './src/shutterstock/hooks/vue-query.ts' },
  'svelte-query': { output: './src/shutterstock/hooks/svelte-query.ts' },
  'angular-query': { output: './src/shutterstock/hooks/angular-query.ts' },
  docs: {
    output: './src/shutterstock/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
