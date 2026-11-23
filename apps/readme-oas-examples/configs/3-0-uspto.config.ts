import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/uspto.yaml',
  output: './src/3-0-uspto/routes.ts',
  template: {},
  type: { output: './src/3-0-uspto/types.ts' },
  client: { output: './src/3-0-uspto/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-uspto/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-uspto/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-uspto/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-uspto/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-uspto/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-uspto/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-uspto/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-uspto/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-uspto/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
