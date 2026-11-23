import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediaconnect/2018-11-14/openapi.yaml',
  output: './src/mediaconnect/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mediaconnect/types.ts' },
  client: { output: './src/mediaconnect/client.ts', baseUrl: '/' },
  rpc: { output: './src/mediaconnect/rpc.ts', parseResponse: true },
  swr: { output: './src/mediaconnect/hooks/swr.ts' },
  'tanstack-query': { output: './src/mediaconnect/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mediaconnect/hooks/preact-query.ts' },
  'solid-query': { output: './src/mediaconnect/hooks/solid-query.ts' },
  'vue-query': { output: './src/mediaconnect/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mediaconnect/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mediaconnect/hooks/angular-query.ts' },
  docs: {
    output: './src/mediaconnect/api.md',
    curl: true,
    baseUrl: 'https://mediaconnect.us-east-1.amazonaws.com',
  },
})
