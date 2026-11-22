import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/externalPathItemRef.yaml',
  output: './src/3-0-externalpathitemref/routes.ts',
  template: {},
  type: { output: './src/3-0-externalpathitemref/types.ts' },
  client: { output: './src/3-0-externalpathitemref/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-externalpathitemref/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-externalpathitemref/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-externalpathitemref/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-externalpathitemref/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-externalpathitemref/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-externalpathitemref/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-externalpathitemref/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-externalpathitemref/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-externalpathitemref/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
