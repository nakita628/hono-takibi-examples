import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediatailor/2018-04-23/openapi.yaml',
  output: './src/mediatailor/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mediatailor/types.ts' },
  client: { output: './src/mediatailor/client.ts', baseUrl: '/' },
  rpc: { output: './src/mediatailor/rpc.ts', parseResponse: true },
  swr: { output: './src/mediatailor/hooks/swr.ts' },
  'tanstack-query': { output: './src/mediatailor/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mediatailor/hooks/preact-query.ts' },
  'solid-query': { output: './src/mediatailor/hooks/solid-query.ts' },
  'vue-query': { output: './src/mediatailor/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mediatailor/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mediatailor/hooks/angular-query.ts' },
  docs: {
    output: './src/mediatailor/api.md',
    curl: true,
    baseUrl: 'https://mediatailor.us-east-1.amazonaws.com',
  },
})
