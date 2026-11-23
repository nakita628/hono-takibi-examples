import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/adca3491-a606-4ede-b895-678710727380.yaml',
  output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/routes.ts',
  template: {},
  type: { output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/types.ts' },
  client: { output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-fuzz1-adca3491-a606-4ede-b895-678710727380/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
