import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/iciciprulife/3.0.0/openapi.yaml',
  output: './src/iciciprulife/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/iciciprulife/types.ts' },
  client: { output: './src/iciciprulife/client.ts', baseUrl: '/' },
  rpc: { output: './src/iciciprulife/rpc.ts', parseResponse: true },
  swr: { output: './src/iciciprulife/hooks/swr.ts' },
  'tanstack-query': { output: './src/iciciprulife/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iciciprulife/hooks/preact-query.ts' },
  'solid-query': { output: './src/iciciprulife/hooks/solid-query.ts' },
  'vue-query': { output: './src/iciciprulife/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iciciprulife/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iciciprulife/hooks/angular-query.ts' },
  docs: {
    output: './src/iciciprulife/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
