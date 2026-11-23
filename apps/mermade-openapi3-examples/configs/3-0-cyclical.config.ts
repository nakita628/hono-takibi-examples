import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/cyclical.yaml',
  output: './src/3-0-cyclical/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-cyclical/types.ts' },
  client: { output: './src/3-0-cyclical/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-cyclical/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-cyclical/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-cyclical/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-cyclical/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-cyclical/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-cyclical/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-cyclical/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-cyclical/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-cyclical/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
