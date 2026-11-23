import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediaconvert/2017-08-29/openapi.yaml',
  output: './src/mediaconvert/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mediaconvert/types.ts' },
  client: { output: './src/mediaconvert/client.ts', baseUrl: '/' },
  rpc: { output: './src/mediaconvert/rpc.ts', parseResponse: true },
  swr: { output: './src/mediaconvert/hooks/swr.ts' },
  'tanstack-query': { output: './src/mediaconvert/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mediaconvert/hooks/preact-query.ts' },
  'solid-query': { output: './src/mediaconvert/hooks/solid-query.ts' },
  'vue-query': { output: './src/mediaconvert/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mediaconvert/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mediaconvert/hooks/angular-query.ts' },
  docs: {
    output: './src/mediaconvert/api.md',
    curl: true,
    baseUrl: 'https://mediaconvert.us-east-1.amazonaws.com',
  },
})
