import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/mega.yaml',
  output: './src/3-1-mega/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-1-mega/types.ts' },
  client: { output: './src/3-1-mega/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-mega/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-mega/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-mega/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-mega/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-mega/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-mega/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-mega/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-mega/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-mega/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
