import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/webfonts/v1/openapi.yaml',
  output: './src/webfonts/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/webfonts/types.ts' },
  client: { output: './src/webfonts/client.ts', baseUrl: '/' },
  rpc: { output: './src/webfonts/rpc.ts', parseResponse: true },
  swr: { output: './src/webfonts/hooks/swr.ts' },
  'tanstack-query': { output: './src/webfonts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/webfonts/hooks/preact-query.ts' },
  'solid-query': { output: './src/webfonts/hooks/solid-query.ts' },
  'vue-query': { output: './src/webfonts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/webfonts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/webfonts/hooks/angular-query.ts' },
  docs: {
    output: './src/webfonts/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
