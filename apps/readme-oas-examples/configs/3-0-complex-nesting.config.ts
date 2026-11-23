import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/complex-nesting.yaml',
  output: './src/3-0-complex-nesting/routes.ts',
  template: {},
  type: { output: './src/3-0-complex-nesting/types.ts' },
  client: { output: './src/3-0-complex-nesting/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-complex-nesting/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-complex-nesting/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-complex-nesting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-complex-nesting/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-complex-nesting/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-complex-nesting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-complex-nesting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-complex-nesting/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-complex-nesting/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
