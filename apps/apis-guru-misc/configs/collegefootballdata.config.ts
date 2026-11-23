import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/collegefootballdata.com/4.4.12/openapi.yaml',
  output: './src/collegefootballdata/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/collegefootballdata/types.ts' },
  client: { output: './src/collegefootballdata/client.ts', baseUrl: '/' },
  rpc: { output: './src/collegefootballdata/rpc.ts', parseResponse: true },
  swr: { output: './src/collegefootballdata/hooks/swr.ts' },
  'tanstack-query': { output: './src/collegefootballdata/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/collegefootballdata/hooks/preact-query.ts' },
  'solid-query': { output: './src/collegefootballdata/hooks/solid-query.ts' },
  'vue-query': { output: './src/collegefootballdata/hooks/vue-query.ts' },
  'svelte-query': { output: './src/collegefootballdata/hooks/svelte-query.ts' },
  'angular-query': { output: './src/collegefootballdata/hooks/angular-query.ts' },
  docs: {
    output: './src/collegefootballdata/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
