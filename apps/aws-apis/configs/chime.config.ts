import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/chime/2018-05-01/openapi.yaml',
  output: './src/chime/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/chime/types.ts' },
  client: { output: './src/chime/client.ts', baseUrl: '/' },
  rpc: { output: './src/chime/rpc.ts', parseResponse: true },
  swr: { output: './src/chime/hooks/swr.ts' },
  'tanstack-query': { output: './src/chime/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/chime/hooks/preact-query.ts' },
  'solid-query': { output: './src/chime/hooks/solid-query.ts' },
  'vue-query': { output: './src/chime/hooks/vue-query.ts' },
  'svelte-query': { output: './src/chime/hooks/svelte-query.ts' },
  'angular-query': { output: './src/chime/hooks/angular-query.ts' },
  docs: {
    output: './src/chime/api.md',
    curl: true,
    baseUrl: 'https://chime.us-east-1.amazonaws.com',
  },
})
