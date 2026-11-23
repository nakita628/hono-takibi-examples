import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/parameters-cookies.yaml',
  output: './src/3-0-parameters-cookies/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-parameters-cookies/types.ts' },
  client: { output: './src/3-0-parameters-cookies/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-parameters-cookies/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-parameters-cookies/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-parameters-cookies/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-parameters-cookies/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-parameters-cookies/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-parameters-cookies/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-parameters-cookies/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-parameters-cookies/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-parameters-cookies/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
