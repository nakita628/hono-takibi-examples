import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/link-example.yaml',
  output: './src/3-0-link-example/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-link-example/types.ts' },
  client: { output: './src/3-0-link-example/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-link-example/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-link-example/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-link-example/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-link-example/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-link-example/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-link-example/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-link-example/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-link-example/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-link-example/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
