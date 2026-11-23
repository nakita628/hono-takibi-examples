import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/polymorphism.yaml',
  output: './src/3-0-polymorphism/routes.ts',
  template: {},
  type: { output: './src/3-0-polymorphism/types.ts' },
  client: { output: './src/3-0-polymorphism/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-polymorphism/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-polymorphism/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-polymorphism/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-polymorphism/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-polymorphism/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-polymorphism/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-polymorphism/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-polymorphism/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-polymorphism/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
