import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/discriminators.yaml',
  output: './src/3-0-discriminators/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-discriminators/types.ts' },
  client: { output: './src/3-0-discriminators/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-discriminators/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-discriminators/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-discriminators/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-discriminators/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-discriminators/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-discriminators/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-discriminators/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-discriminators/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-discriminators/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
