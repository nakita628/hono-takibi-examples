import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lightsail/2016-11-28/openapi.yaml',
  output: './src/lightsail/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/lightsail/types.ts' },
  client: { output: './src/lightsail/client.ts', baseUrl: '/' },
  rpc: { output: './src/lightsail/rpc.ts', parseResponse: true },
  swr: { output: './src/lightsail/hooks/swr.ts' },
  'tanstack-query': { output: './src/lightsail/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lightsail/hooks/preact-query.ts' },
  'solid-query': { output: './src/lightsail/hooks/solid-query.ts' },
  'vue-query': { output: './src/lightsail/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lightsail/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lightsail/hooks/angular-query.ts' },
  docs: {
    output: './src/lightsail/api.md',
    curl: true,
    baseUrl: 'https://lightsail.us-east-1.amazonaws.com',
  },
})
